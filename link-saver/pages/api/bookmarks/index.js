import { supabase } from '../../../lib/supabase';

export default async function handler(req, res) {
  // Verify authentication
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const user = session.user;

  // GET request - fetch all bookmarks
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      return res.status(200).json({ bookmarks: data });
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
      return res.status(500).json({ error: 'Failed to fetch bookmarks' });
    }
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}