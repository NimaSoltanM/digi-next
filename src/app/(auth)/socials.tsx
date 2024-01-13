import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/auth/routes';
import { Button } from '@/components/ui/button';

export default function Socials() {
  return (
    <div className='mt-6'>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-gray-50 text-gray-500'>
            Or continue with
          </span>
        </div>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-3'>
        <Button
          onClick={() =>
            signIn('github', {
              callbackUrl: DEFAULT_LOGIN_REDIRECT,
            })
          }
          className='w-full flex justify-center items-center'
          variant='outline'>
          <GithubIcon className='mr-2 h-4 w-4' />
          Continue with GitHub
        </Button>
      </div>
    </div>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
      <path d='M9 18c-4.51 2-5-2-7-2' />
    </svg>
  );
}
