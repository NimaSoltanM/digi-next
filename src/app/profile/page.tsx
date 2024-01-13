import { auth } from '@/auth/auth';

export default async function Page() {
  const session = await auth();

  if (!session) return null;

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome back {session.user?.name}</p>
    </div>
  );
}
