// Format date to readable format
export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

// Extract domain from URL
export function extractDomain(url) {
  try {
    const domain = new URL(url);
    return domain.hostname.replace('www.', '');
  } catch (e) {
    return url;
  }
}

// Truncate text with ellipsis
export function truncateText(text, maxLength = 100) {
  if (!text) return '';
  return text.length > maxLength
    ? `${text.substring(0, maxLength)}...`
    : text;
}

// Generate initials from email
export function getInitials(email) {
  if (!email) return 'U';
  return email.charAt(0).toUpperCase();
}