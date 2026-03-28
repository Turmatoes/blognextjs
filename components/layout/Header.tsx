'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const ObjectLinks = [
    { href: '/', label: 'Trang chủ' },
    { href: '/blog', label: 'Bài viết' },
    { href: '/about', label: 'Giới thiệu' },
    { href: '/contact', label: 'Liên hệ' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-[10px] shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 tracking-tighter group-hover:opacity-80 transition-opacity">
            Phi Long
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <Navigation />

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-2 shadow-lg absolute w-full left-0 animate-in slide-in-from-top-2">
          {ObjectLinks.map((link) => {
             const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
             return (
               <Link 
                 key={link.href}
                 href={link.href} 
                 className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                   isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                 }`}
                 onClick={() => setIsOpen(false)}
               >
                 {link.label}
               </Link>
             )
          })}
        </div>
      )}
    </header>
  );
}