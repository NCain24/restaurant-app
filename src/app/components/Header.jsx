import React from 'react';
import Link from 'next/link';
import { auth } from '@/app/auth';
import LoginButton from './LoginButton';
import { signOut } from '@/app/auth';

const Header = async () => {
  const session = await auth();
  

  if (session?.user) {
    return (
      <div className="flex h-[5%] justify-between">
        <Link
          className="font-['Josefin_Slab'] font-extrabold text-3xl"
          href="/"
        >
          Restaurant App
        </Link>
        { session?.user?.name || 'Hello' }
        <Link href={'/api/auth/signout'}>Sign Out</Link>
      </div>
    );
  }
  return (
    <div className="flex h-[5%] justify-between">
      <Link className="font-['Josefin_Slab'] font-extrabold text-3xl" href="/">
        Restaurant App
      </Link>
      <LoginButton />
    </div>
  );
};

export default Header;
