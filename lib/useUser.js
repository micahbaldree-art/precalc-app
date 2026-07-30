import { useEffect, useState } from 'react';

export function useUser() {
  const [user, setUser] = useState(undefined); // undefined = loading, null = signed out
  useEffect(() => {
    fetch('/api/auth/me')
      .then((r) => r.json())
      .then((d) => setUser(d.user))
      .catch(() => setUser(null));
  }, []);
  return user;
}
