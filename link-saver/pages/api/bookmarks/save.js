import { supabase, getServiceSupabase } from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Extract the token from the request
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1] || '';
  
  console.log("Auth header present:", !!authHeader);

  try {
    // Get session using the token from the request
    let userId;
    
    if (token) {
      // Use token from request header if available
      const supabaseWithAuth = getServiceSupabase(token);
      const { data: { user }, error: userError } = await supabaseWithAuth.auth.getUser();
      
      if (userError || !user) {
        console.error("Auth error with token:", userError);
        return res.status(401).json({ error: 'Invalid authentication token' });
      }
      
      userId = user.id;
    } else {
      // Fallback to current session (may not work in API routes)
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        console.error("No session found and no token provided");
        return res.status(401).json({ error: 'Authentication required' });
      }
      
      userId = session.user.id;
    }
    
    console.log("User authenticated with ID:", userId);
    
    const { url, title, favicon, summary, imageUrl } = req.body;
    
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }
    
    // Use supabase with the user's token
    const supabaseWithAuth = token ? getServiceSupabase(token) : supabase;
    
    // Insert the bookmark
    const { data, error } = await supabaseWithAuth
      .from('bookmarks')
      .insert({
        user_id: userId,
        url: url,
        title: title || url,
        favicon: favicon || null,
        summary: summary || null,
        image_url: imageUrl || null,
        created_at: new Date().toISOString(),
        order_index: 0
      })
      .select();
    
    if (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: error.message });
    }
    
    console.log("Bookmark saved successfully!");
    return res.status(201).json({ success: true, bookmark: data?.[0] });
    
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: 'Server error: ' + error.message });
  }
}