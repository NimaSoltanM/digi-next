import credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import Github from 'next-auth/providers/github';

import { SignInSchema } from '../schemas';

import type { NextAuthConfig } from 'next-auth';
import { db } from '../lib/db';

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    credentials({
      async authorize(credentials) {
        const validatedFields = SignInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await db.user.findUnique({ where: { email } });

          if (!user || !user.password) return null;

          const passwordsMath = await bcrypt.compare(password, user.password);

          if (!passwordsMath) return null;

          return user;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
