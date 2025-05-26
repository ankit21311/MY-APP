import { useState } from 'react';
import Link from 'next/link';
import { extractDomain, truncateText } from '../../lib/helpers';

export default function BookmarkCard({ bookmark, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const { id, url, title, favicon, summary, image_url } = bookmark;
  const domain = extractDomain(url);
  
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg border border-gray-100 dark:border-gray-700 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/bookmark/${id}`} className="block h-full">
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center mb-3">
            {favicon ? (
              <img
                src={favicon}
                alt=""
                className="h-6 w-6 mr-2 rounded"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/favicon-placeholder.png';
                }}
              />
            ) : (
              <div className="h-6 w-6 mr-2 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400">
                {domain.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="text-xs text-gray-500 dark:text-gray-400">{domain}</span>
            
            {isHovered && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDelete(id);
                }}
                className="ml-auto text-gray-400 hover:text-red-500 transition-colors duration-200"
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
            )}
          </div>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {title || 'Untitled'}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
            {truncateText(summary, 120) || 'No summary available'}
          </p>
          
          <div className="mt-4 text-sm text-primary dark:text-primary-light font-medium">
            View details
          </div>
        </div>
      </Link>
    </div>
  );
}