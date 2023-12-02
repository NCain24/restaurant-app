import { auth } from '@/app/auth'
import Link from 'next/link';

const LoginButton = async () => {
    const session = await auth();

    
  return (
    <Link href='/api/auth/signin'>LOGIN</Link>
  )
}

export default LoginButton