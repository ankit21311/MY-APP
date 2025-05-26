import BookmarkCard from './BookmarkCard';
import EmptyState from './EmptyState';

export default function BookmarkGrid({ bookmarks, onDelete, onAddBookmark }) {
  if (!bookmarks || bookmarks.length === 0) {
    return <EmptyState onAddBookmark={onAddBookmark} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {bookmarks.map((bookmark) => (
        <BookmarkCard
          key={bookmark.id}
          bookmark={bookmark}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}