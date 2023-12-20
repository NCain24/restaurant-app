'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div className="h-[40vh] font-mono pt-10 text-center">
      <div>
        <h1 className="text-4xl">
          Your next meal awaits you...
        </h1>
        <div className='pt-10'>
        {session && <Link className='border-2 rounded-lg py-2 px-4' href='/search'>Begin your search.</Link>}

        </div>
      </div>
    </div>
  );
};

export default HomePage;
