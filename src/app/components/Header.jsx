import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from '@nextui-org/react';
import HeaderAuth from './HeaderAuth';

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="font-mono text-xl">
          <span className='text-orange-400'>NEXT</span> Restaurant App
        </Link>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
