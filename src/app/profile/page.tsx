import { auth } from '@/auth/auth';

export default async function Page() {
  const session = await auth();

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome back {session ? session.user?.name : null}</p>
    </div>
  );
}
