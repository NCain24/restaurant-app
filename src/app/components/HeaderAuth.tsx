'use client';

import { useSession } from 'next-auth/react';
import * as actions from '@/actions';

export default function HeaderAuth() {
  const session = useSession();

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  } else if (session.status === 'unauthenticated') {
    return (
      <>
        <form action={actions.signIn}>
          <button type="submit" className="font-mono">
            Sign In
          </button>
        </form>
      </>
    );
  } else {
    return (
      <div className='flex justify-between gap-4'>
        <p>
          Signed in as <b>{session?.data?.user?.name}</b>
        </p>
        <form action={actions.signOut}>
          <button type="submit" className="font-mono">
            Sign Out
          </button>
        </form>
      </div>
    );
  }
}
