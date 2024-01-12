'use server';

import { db } from '@/lib/db';
import { SignUpSchema } from '@/schemas';
import * as z from 'zod';
import bcrypt from 'bcryptjs';

const signUpAction = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) return { error: 'something went wrong' };

  const { name, email, password } = validatedFields.data;

  const userExists = await db.user.findUnique({ where: { email } });

  if (userExists) return { error: 'User already exists' };

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: 'User created successfully' };
};

export default signUpAction;
