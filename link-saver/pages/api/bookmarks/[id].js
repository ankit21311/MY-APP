import { supabase } from '../../../lib/supabase';

export default async function handler(req, res) {
  // Verify authentication
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const user = session.user;
  const { id } = req.query;

  // GET request - fetch a single bookmark
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('id', id)
        .eq('user_id', user.id)
        .single();
        
      if (error) throw error;
      
      if (!data) {
        return res.status(404).json({ error: 'Bookmark not found' });
      }
      
      return res.status(200).json({ bookmark: data });
    } catch (error) {
      console.error('Error fetching bookmark:', error);
      return res.status(500).json({ error: 'Failed to fetch bookmark' });
    }
  }
  
  // DELETE request - delete a bookmark
  if (req.method === 'DELETE') {
    try {
      const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);
        
      if (error) throw error;
      
      return res.status(200).json({ message: 'Bookmark deleted successfully' });
    } catch (error) {
      console.error('Error deleting bookmark:', error);
      return res.status(500).json({ error: 'Failed to delete bookmark' });
    }
  }
  
  // PUT request - update a bookmark
  if (req.method === 'PUT') {
    const { title, summary } = req.body;
    
    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .update({ 
          title, 
          summary,
          updated_at: new Date() 
        })
        .eq('id', id)
        .eq('user_id', user.id)
        .select();
        
      if (error) throw error;
      
      return res.status(200).json({ bookmark: data[0] });
    } catch (error) {
      console.error('Error updating bookmark:', error);
      return res.status(500).json({ error: 'Failed to update bookmark' });
    }
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}