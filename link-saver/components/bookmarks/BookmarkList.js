import { extractDomain, truncateText, formatDate } from '../../lib/helpers';
import EmptyState from './EmptyState';
import Link from 'next/link';

export default function BookmarkList({ bookmarks, onDelete, onAddBookmark }) {
  if (!bookmarks || bookmarks.length === 0) {
    return <EmptyState onAddBookmark={onAddBookmark} />;
  }

  return (
    <div className="space-y-4">
      {bookmarks.map((bookmark) => (
        <div
          key={bookmark.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex border border-gray-100 dark:border-gray-700"
        >
          <div className="flex-shrink-0 mr-4">
            {bookmark.favicon ? (
              <img
                src={bookmark.favicon}
                alt=""
                className="h-10 w-10 rounded"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/favicon-placeholder.png';
                }}
              />
            ) : (
              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-sm font-bold text-gray-500 dark:text-gray-400">
                {extractDomain(bookmark.url).charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <Link href={`/bookmark/${bookmark.id}`}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate hover:text-primary dark:hover:text-primary-light">
                {bookmark.title || 'Untitled'}
              </h3>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {extractDomain(bookmark.url)} • {formatDate(bookmark.created_at)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {truncateText(bookmark.summary, 150) || 'No summary available'}
            </p>
          </div>
          
          <div className="flex-shrink-0 ml-4 flex items-start">
            <button
              onClick={() => onDelete(bookmark.id)}
              className="text-gray-400 hover:text-red-500 transition-colors duration-200"
              aria-label="Delete bookmark"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}