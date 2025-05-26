import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import Loader from '../ui/Loader';

export default function AuthRedirect({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loader fullScreen />;
  }

  if (user) {
    return null;
  }

  return <>{children}</>;
}