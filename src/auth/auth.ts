import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';

import authConfig from './auth.config';
import { db } from '../lib/db';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await db.user.findUnique({
        where: { id: token.sub },
      });

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },

  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});
