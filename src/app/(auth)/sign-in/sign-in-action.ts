'use server';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { SignInSchema } from '@/schemas';
import * as z from 'zod';
import { AuthError } from 'next-auth';

interface LoginResponse {
  error?: string;
  success?: string;
}

export const signInAction = async (values: z.infer<typeof SignInSchema>) => {
  const validateField = SignInSchema.safeParse(values);

  if (!validateField.success) {
    return { error: 'Invalid fields' };
  }

  const { email, password } = validateField.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            error: 'Invalid email or password',
          };
        default:
          return {
            error: 'something went wrong',
          };
      }
    }

    throw error;
  }
};
