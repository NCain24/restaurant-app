import Link from 'next/link';
import HeaderAuth from './HeaderAuth';

const Header = () => {
  return (
    <>
      <Link href="/" className="font-mono text-xl">
        Restaurant App
      </Link>
      <HeaderAuth />
    </>
  );
};

export default Header;
