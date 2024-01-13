/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AwoNczqpgcf
 */
export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900'>
      <div className='animate-pulse'>
        <CircleIcon className='h-24 w-24 text-blue-500 dark:text-blue-300' />
      </div>
      <div className='mt-4 h-1 w-64 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden'>
        <div
          className='h-full bg-blue-500 animate-ping'
          style={{
            width: '80%',
          }}
        />
      </div>
      <p className='mt-4 text-gray-500 dark:text-gray-400'>Loading...</p>
    </div>
  );
}

function CircleIcon(props: any) {
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
      <circle cx='12' cy='12' r='10' />
    </svg>
  );
}
