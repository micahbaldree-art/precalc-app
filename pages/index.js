import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../lib/useUser';

export default function Home() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user === undefined) return;
    if (!user) return router.replace('/login');
    if (user.role === 'teacher') return router.replace('/teacher/assignments');
    router.replace('/assignments');
  }, [user, router]);

  return null;
}
