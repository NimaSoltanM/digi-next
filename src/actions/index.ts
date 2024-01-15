'use server';

import { signOut } from '@/auth/auth';

export const logoutAction = async () => {
  await signOut();
};
