'use client';
import { menuItems } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MobileNavbar = () => {
  const pathname = usePathname();


  const mobileItems = menuItems.slice(0, 5);

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass glass-border border-t lg:hidden z-50">
      <div className="flex justify-around items-center py-2 px-2">
        {mobileItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.icon && (
                <item.icon
                  className={`w-5 h-5 ${isActive ? 'glow-red-sm' : ''}`}
                />
              )}
              <span className="text-[10px] font-medium mt-1">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavbar;
