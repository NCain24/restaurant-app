'use client';

import { useSession } from 'next-auth/react';
import * as actions from '@/actions';

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === 'loading') {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <div>
        <form action={actions.signOut}>
          <button className="text-xl font-mono" type="submit">
            Sign Out
          </button>
        </form>
      </div>
    );
  } else {
    authContent = (
      <>
        <form action={actions.signIn}>
          <button type="submit" className="font-mono">
            Sign In
          </button>
        </form>

        <form action={actions.signIn}>
          <button type="submit" className="font-mono">
            Sign Up
          </button>
        </form>
      </>
    );
  }

  return authContent;
}
