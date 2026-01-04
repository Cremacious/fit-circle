import LeftSidebar from '@/components/layout/LeftSidebar';
import MobileNavbar from '@/components/layout/MobileNavbar';
import RightSidebar from '@/components/layout/RightSidebar';
import { createClient } from '@/lib/server';
import { redirect } from 'next/navigation';

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect('/auth/login');
  }

  return (
    <div className="h-screen flex bg-background">
      <div className="hidden lg:block w-64 shrink-0">
        <LeftSidebar />
      </div>

      <main className="flex-1 overflow-y-auto pb-20 lg:pb-0 custom-scrollbar">
        <div className="max-w-2xl mx-auto">{children}</div>
      </main>

      <div className="hidden xl:block w-80 shrink-0">
        <RightSidebar />
      </div>

      <MobileNavbar />
    </div>
  );
}
