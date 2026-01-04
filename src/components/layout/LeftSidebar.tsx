'use client';
import { menuItems } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col h-screen w-full bg-sidebar border-r border-border">
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                isActive
                  ? 'bg-accent text-primary glow-red-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {item.icon && <item.icon className="w-5 h-5" />}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default LeftSidebar;
