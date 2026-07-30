import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TeacherNav() {
  const router = useRouter();
  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  }
  return (
    <div className="teacher-nav">
      <div style={{ padding: '18px 22px', fontWeight: 700, fontSize: '1.1rem' }}>Pre-Calc</div>
      <Link href="/teacher/assignments" className={router.pathname === '/teacher/assignments' ? 'active' : ''}>Assignments</Link>
      <Link href="/teacher/gradebook" className={router.pathname === '/teacher/gradebook' ? 'active' : ''}>Gradebook</Link>
      <Link href="/teacher/roster" className={router.pathname === '/teacher/roster' ? 'active' : ''}>Roster</Link>
      <button onClick={logout} style={{ marginTop: 30 }}>Log out</button>
    </div>
  );
}
