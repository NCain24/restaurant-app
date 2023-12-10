'use client';
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import * as actions from '@/actions';

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
    if (session.status === 'loading') {
        authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover className='' placement="left">
        <PopoverTrigger className=''>
          <Avatar className="cursor-pointer" src={session.data.user.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <form action={actions.signOut}>
              <Button className='text-xl font-mono' type="submit" href="/">
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" className='font-mono' color="warning" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" className='font-mono' color="warning" variant="bordered">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
