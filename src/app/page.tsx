import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[95vh]">
      <h2 className="font-['Arial'] uppercase text-xl">
        Find your next meal here
      </h2>
      <Link
        className="border-2 rounded-full py-2 px-6 border-red-200"
        href="/search"
      >
        Search
      </Link>
    </div>
  );
};

export default HomePage;
