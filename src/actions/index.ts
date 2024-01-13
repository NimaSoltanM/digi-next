'use server';

import { auth, signOut } from '@/auth/auth';

export const logoutAction = async () => {
  await signOut();
};
