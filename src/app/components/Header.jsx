import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="h-[5vh]">
      <Link class="font-['Josefin_Slab'] font-extrabold text-3xl" href="/">
        Restaurant App
      </Link>
    </div>
  );
};

export default Header;
