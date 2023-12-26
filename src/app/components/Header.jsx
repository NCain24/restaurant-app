import Link from 'next/link';
import HeaderAuth from './HeaderAuth';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 mb-20'>
      <Link href="/" className="font-mono text-xl">
        Restaurant App
      </Link>
      <HeaderAuth className="ml-auto" />
    </div>
  );
};

export default Header;
