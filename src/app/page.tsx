import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const HomePage = async () => {
  const session = await getServerSession();
  return (
    <div className="flex items-center justify-center flex-col h-[95vh]">
      <h2 className="font-['Arial'] uppercase text-xl">
        Find your next meal here
      </h2>
      {!session && (
        <Link
          className="border-2 rounded-full py-2 px-6 border-red-200"
          href="/api/auth/signin"
        >
          Login
        </Link>
      )}
      {session && (
        <Link
        className="border-2 rounded-full py-2 px-6 border-red-200"
        href="/search"
      >
        Search
      </Link>
      )}
      
    </div>
  );
};

export default HomePage;
