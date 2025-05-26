import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import BookmarkGrid from '../components/bookmarks/BookmarkGrid';
import BookmarkList from '../components/bookmarks/BookmarkList';
import AddBookmarkModal from '../components/bookmarks/AddBookmarkModal';
import SearchBar from '../components/common/SearchBar';
import Button from '../components/ui/Button';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import Toast from '../components/ui/Toast';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [toast, setToast] = useState(null);

  // Fetch bookmarks
  const fetchBookmarks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setBookmarks(data || []);
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
      showToast('Failed to load bookmarks', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  // Save bookmark
  const saveBookmark = async (bookmarkData) => {
    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .insert([{
          url: bookmarkData.url,
          title: bookmarkData.title,
          favicon: bookmarkData.favicon,
          summary: bookmarkData.summary,
          image_url: bookmarkData.imageUrl
        }]);
        
      if (error) throw error;
      fetchBookmarks();
      showToast('Bookmark saved successfully', 'success');
    } catch (error) {
      console.error('Error saving bookmark:', error);
      showToast('Failed to save bookmark', 'error');
      throw error;
    }
  };

  // Delete bookmark
  const deleteBookmark = async (id) => {
    if (!window.confirm('Are you sure you want to delete this bookmark?')) return;
    
    try {
      const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
      showToast('Bookmark deleted successfully', 'success');
    } catch (error) {
      console.error('Error deleting bookmark:', error);
      showToast('Failed to delete bookmark', 'error');
    }
  };

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter bookmarks based on search term
  const filteredBookmarks = bookmarks.filter(
    (bookmark) =>
      bookmark.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bookmark.url?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bookmark.summary?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show toast message
  const showToast = (message, type) => {
    setToast({ message, type });
  };

  // Close toast
  const closeToast = () => {
    setToast(null);
  };

  return (
    <ProtectedRoute>
      <Layout>
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Bookmarks</h1>
          
          <Button onClick={() => setIsModalOpen(true)}>
            <span className="flex items-center">
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add New Link
            </span>
          </Button>
        </div>
        
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:flex-1">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          <div className="flex">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-l-lg border ${
                viewMode === 'grid'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-r-lg border ${
                viewMode === 'list'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700'
              }`}
            >
              List
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="py-12 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : viewMode === 'grid' ? (
          <BookmarkGrid
            bookmarks={filteredBookmarks}
            onDelete={deleteBookmark}
            onAddBookmark={() => setIsModalOpen(true)}
          />
        ) : (
          <BookmarkList
            bookmarks={filteredBookmarks}
            onDelete={deleteBookmark}
            onAddBookmark={() => setIsModalOpen(true)}
          />
        )}
        
        <AddBookmarkModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={saveBookmark}
        />
        
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={closeToast}
          />
        )}
      </Layout>
    </ProtectedRoute>
  );
}