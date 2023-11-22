import React from 'react';
import Link from 'next/link';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    <div className="flex h-[5%] justify-between">
      <Link className="font-['Josefin_Slab'] font-extrabold text-3xl" href="/">
        Restaurant App
      </Link>
      <div className='flex justify-center items-center pr-6'>
        <NavMenu />
      </div>
    </div>
  );
};

export default Header;
