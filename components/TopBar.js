import { useRouter } from 'next/router';

export default function TopBar({ user }) {
  const router = useRouter();
  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  }
  return (
    <div className="topbar">
      <div className="brand">Pre-Calc</div>
      <div className="userinfo">
        {user && <span>{user.firstName} {user.lastName}</span>}
        <button className="link" onClick={logout}>Log out</button>
      </div>
    </div>
  );
}
