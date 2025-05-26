import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Loader from '../ui/Loader';
import { supabase } from '../../lib/supabase'; // Import supabase client

export default function AddBookmarkModal({ isOpen, onClose, onSave }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.access_token) {
        setToken(session.access_token);
      }
    };

    if (isOpen) {
      getSession();
    }
  }, [isOpen]);

  const resetState = () => {
    setUrl('');
    setLoading(false);
    setPreview(null);
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const fetchLinkData = async () => {
    try {
      setLoading(true);

      const { data: extractData } = await axios.post('/api/extract-link', { url });
      const { data: summaryData } = await axios.post('/api/summarize', { url });

      setPreview({
        url,
        title: extractData.title,
        favicon: extractData.favicon,
        imageUrl: extractData.imageUrl,
        summary: summaryData.summary
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching link data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      return;
    }

    if (!preview) {
      await fetchLinkData();
      return;
    }

    if (!token) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.access_token) {
          return;
        }
        setToken(session.access_token);
      } catch (error) {
        console.error('Authentication error:', error);
        return;
      }
    }

    try {
      setLoading(true);

      const response = await axios.post('/api/bookmarks/save', preview, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (onSave) {
        await onSave(response.data.bookmark);
      }

      handleClose();
    } catch (error) {
      console.error('Error saving bookmark:', error);
      setLoading(false);
    }
  };

  const modalFooter = (
    <div className="flex justify-end space-x-3">
      <Button variant="outline" onClick={handleClose} disabled={loading}>
        Cancel
      </Button>
      <Button type="submit" form="add-bookmark-form" disabled={loading}>
        {preview ? 'Save Bookmark' : 'Fetch Link Data'}
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Add New Bookmark"
      footer={modalFooter}
      maxWidth="max-w-xl"
    >
      <form id="add-bookmark-form" onSubmit={handleSubmit}>
        <Input
          id="url"
          label="Enter URL"
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          disabled={loading || preview}
          className="mb-4"
        />

        {loading && (
          <div className="py-8 flex justify-center">
            <Loader />
          </div>
        )}

        {preview && (
          <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center mb-3">
              {preview.favicon ? (
                <img
                  src={preview.favicon}
                  alt=""
                  className="h-6 w-6 mr-2 rounded"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/favicon-placeholder.png';
                  }}
                />
              ) : (
                <div className="h-6 w-6 mr-2 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400">
                  {new URL(url).hostname.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new URL(url).hostname.replace('www.', '')}
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              {preview.title || 'Untitled'}
            </h3>

            <div className="text-sm text-gray-600 dark:text-gray-300 max-h-40 overflow-y-auto mb-2">
              {preview.summary || 'No summary available'}
            </div>
          </div>
        )}
      </form>
    </Modal>
  );
}
