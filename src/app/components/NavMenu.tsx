'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex gap-4">
        <button onClick={() => signOut()}>Sign Out</button>
        <Image
          className="rounded-full"
          alt="User Image"
          src={session?.user?.image}
          width={40}
          height={40}
        />
      </div>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export default function NavMenu() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}
