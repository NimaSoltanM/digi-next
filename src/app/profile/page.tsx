import { auth } from '@/auth/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();

  if (!session) redirect('/sign-in');

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome back {session ? session.user?.name : null}</p>
    </div>
  );
}
