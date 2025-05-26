import { useState } from 'react';
import Link from 'next/link';
import { extractDomain, formatDate } from '../../lib/helpers';
import Button from '../ui/Button';

export default function BookmarkDetail({ bookmark, onDelete }) {
  const { id, url, title, favicon, summary, image_url, created_at } = bookmark;
  const domain = extractDomain(url);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="p-6">
        <div className="flex items-center mb-4">
          {favicon ? (
            <img
              src={favicon}
              alt=""
              className="h-8 w-8 mr-3 rounded"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/favicon-placeholder.png';
              }}
            />
          ) : (
            <div className="h-8 w-8 mr-3 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-sm font-bold text-gray-500 dark:text-gray-400">
              {domain.charAt(0).toUpperCase()}
            </div>
          )}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {domain} • {formatDate(created_at)}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title || 'Untitled'}</h1>

        {image_url && (
          <div className="mb-6">
            <img
              src={image_url}
              alt={title}
              className="w-full h-auto rounded-lg object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Summary</h2>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {summary || 'No summary available for this link.'}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <svg
              className="mr-2 -ml-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            Visit Website
          </a>
          
          <Button
            variant="danger"
            onClick={() => onDelete(id)}
            className="inline-flex items-center"
          >
            <svg
              className="mr-2 -ml-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Delete Bookmark
          </Button>

          <Link href="/" passHref>
            <Button variant="outline" className="inline-flex items-center">
              <svg
                className="mr-2 -ml-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to List
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}