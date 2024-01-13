'use client';

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { SignInSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { useTransition } from 'react';
import { toast } from 'sonner';
import { signInAction } from './sign-in-action';

export default function Page() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof SignInSchema>) {
    startTransition(() => {
      signInAction(values).then((data) => {
        if (data) {
          toast.error(data.error);
        }
      });
    });
  }

  return (
    <main className='mt-16 px-4 sm:px-6 lg:px-8'>
      <Card className='w-full max-w-md mx-auto'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>
            Log In
          </CardTitle>
          <CardDescription className='text-center'>
            Welcome back! Please log in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
              <div className='space-y-1'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='NimaSoltan@gmail.com'
                          {...field}
                          type='email'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='space-y-1'>
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} type='password' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className='w-full' type='submit' disabled={isPending}>
                Log in
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className='text-center text-sm'>
            Dont have an account?
            <Link
              className='font-medium text-indigo-600 hover:text-indigo-500'
              href='/sign-up'>
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
