'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const ObjectLinks = [
    { href: '/', label: 'Trang chủ' },
    { href: '/blog', label: 'Bài viết' },
    { href: '/about', label: 'Giới thiệu' },
    { href: '/contact', label: 'Liên hệ' },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {ObjectLinks.map((link) => {
        // Active state check logic
        const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
        
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-semibold transition-all duration-300 relative py-2 ${
              isActive 
                ? 'text-primary-600' 
                : 'text-gray-600 hover:text-primary-500'
            }`}
          >
            {link.label}
            {/* Active Indication underline */}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-600 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
