// Simple localStorage-based bookmark service

// Get all bookmarks
export const getLocalBookmarks = () => {
  try {
    const bookmarks = localStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
  } catch (error) {
    console.error('Error getting bookmarks from localStorage:', error);
    return [];
  }
};

// Save a bookmark
export const saveLocalBookmark = (bookmark) => {
  try {
    const bookmarks = getLocalBookmarks();
    
    // Generate a unique ID
    const newBookmark = {
      ...bookmark,
      id: `local-${Date.now()}`,
      created_at: new Date().toISOString()
    };
    
    // Add to array and save
    bookmarks.push(newBookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    return newBookmark;
  } catch (error) {
    console.error('Error saving bookmark to localStorage:', error);
    throw new Error('Failed to save bookmark locally');
  }
};

// Delete a bookmark
export const deleteLocalBookmark = (id) => {
  try {
    const bookmarks = getLocalBookmarks();
    const filteredBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    localStorage.setItem('bookmarks', JSON.stringify(filteredBookmarks));
  } catch (error) {
    console.error('Error deleting bookmark from localStorage:', error);
    throw new Error('Failed to delete bookmark locally');
  }
};