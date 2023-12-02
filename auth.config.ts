import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnSearch = nextUrl.pathname.startsWith('/search');
      const isOnHome = nextUrl.pathname === '/';
      if (isOnHome || isOnSearch) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL('/search', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
