import Button from '../ui/Button';

export default function EmptyState({ onAddBookmark }) {
  return (
    <div className="text-center py-12">
      <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
        <svg
          className="h-full w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">No bookmarks yet</h3>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
        Get started by adding your first link. LinkSaver will automatically fetch the title, favicon, and generate a summary.
      </p>
      <div className="mt-6">
        <Button onClick={onAddBookmark}>
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
            Add your first bookmark
          </span>
        </Button>
      </div>
    </div>
  );
}