import * as z from 'zod';

export const SignUpSchema = z
  .object({
    name: z.string().trim().min(1, { message: 'Username is required' }),
    email: z.string().email({ message: 'Invalid email' }),

    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),

    confirmPassword: z
      .string()
      .min(6, { message: 'Confirm password must be at least 6 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const SignInSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(1, { message: 'password is required' }),
});
