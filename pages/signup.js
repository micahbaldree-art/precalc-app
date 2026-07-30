import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) return setError(data.error || 'Something went wrong.');
    router.push('/');
  }

  return (
    <div className="narrow">
      <div className="card">
        <h1>Create your account</h1>
        {error && <div className="error-box">{error}</div>}
        <form onSubmit={submit}>
          <input className="input" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <input className="input" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="input" type="password" placeholder="Password (6+ characters)" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="btn" type="submit" disabled={loading} style={{ width: '100%' }}>
            {loading ? 'Creating account…' : 'Create account'}
          </button>
        </form>
        <p style={{ marginTop: 16, fontSize: '0.9rem' }}>
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
