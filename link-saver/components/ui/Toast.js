import { useEffect, useState } from 'react';

export default function Toast({
  message,
  type = 'success',
  duration = 3000,
  onClose,
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onClose();
      }, 300); // Wait for fade-out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const baseStyles = 'fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300';
  
  const typeStyles = {
    success: 'bg-green-100 text-green-800 border-l-4 border-green-500',
    error: 'bg-red-100 text-red-800 border-l-4 border-red-500',
    warning: 'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500',
    info: 'bg-blue-100 text-blue-800 border-l-4 border-blue-500',
  };

  return (
    <div
      className={`${baseStyles} ${typeStyles[type]} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {type === 'success' && (
            <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {type === 'error' && (
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
}