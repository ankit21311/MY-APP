import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import BookmarkDetail from '../../components/bookmarks/BookmarkDetail';
import Loader from '../../components/ui/Loader';
import Toast from '../../components/ui/Toast';
import ProtectedRoute from '../../components/auth/ProtectedRoute';
import { supabase } from '../../lib/supabase';

export default function BookmarkDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [bookmark, setBookmark] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Fetch bookmark details
  useEffect(() => {
    const fetchBookmark = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('bookmarks')
          .select('*')
          .eq('id', id)
          .single();
          
        if (error) throw error;
        
        if (!data) {
          router.push('/');
          return;
        }
        
        setBookmark(data);
      } catch (error) {
        console.error('Error fetching bookmark:', error);
        showToast('Failed to load bookmark details', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchBookmark();
  }, [id, router]);

  // Delete bookmark
  const deleteBookmark = async (id) => {
    if (!window.confirm('Are you sure you want to delete this bookmark?')) return;
    
    try {
      const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      showToast('Bookmark deleted successfully', 'success');
      
      // Navigate back to the homepage after a short delay
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (error) {
      console.error('Error deleting bookmark:', error);
      showToast('Failed to delete bookmark', 'error');
    }
  };

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
        {loading ? (
          <div className="py-12 flex justify-center">
            <Loader />
          </div>
        ) : bookmark ? (
          <div className="max-w-3xl mx-auto">
            <BookmarkDetail bookmark={bookmark} onDelete={deleteBookmark} />
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Bookmark not found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The bookmark you're looking for doesn't exist or has been deleted.
            </p>
          </div>
        )}
        
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