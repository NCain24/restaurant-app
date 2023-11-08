import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link class="font-['Josefin_Slab'] font-extrabold text-3xl" href="/">
        Restaurant App
      </Link>
    </div>
  );
};

export default Header;
