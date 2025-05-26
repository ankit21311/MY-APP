import { supabase } from '../../../lib/supabase'
import { getMetadata } from '../../../lib/helpers'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { url } = req.body
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    // Get metadata from URL
    const metadata = await getMetadata(url)

    // Get the highest order_index for the user
    const { data: lastBookmark } = await supabase
      .from('bookmarks')
      .select('order_index')
      .eq('user_id', user.id)
      .order('order_index', { ascending: false })
      .limit(1)

    const newOrderIndex = lastBookmark?.[0]?.order_index ?? 0 + 1

    // Insert bookmark
    const { data, error } = await supabase
      .from('bookmarks')
      .insert([
        {
          user_id: user.id,
          url: url,
          title: metadata.title || 'Untitled',
          favicon: metadata.favicon || null,
          summary: metadata.description || null,
          image_url: metadata.image || null,
          order_index: newOrderIndex,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      if (error.code === '23505') { // unique constraint violation
        return res.status(400).json({ error: 'Bookmark already exists' })
      }
      throw error
    }

    return res.status(200).json(data[0])

  } catch (error) {
    console.error('Error saving bookmark:', error)
    return res.status(500).json({ error: 'Failed to save bookmark' })
  }
}