import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../lib/useUser';

export default function Home() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user === undefined) return;
    if (!user) {
      router.replace('/login');
      return;
    }
    if (user.role === 'teacher') {
      router.replace('/teacher/assignments');
      return;
    }
    router.replace('/assignments');
  }, [user, router]);

  return null;
}
