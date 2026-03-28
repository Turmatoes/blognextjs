// components/layout/Header.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            priority
                        />
                        <span className="text-xl font-bold text-gray-800">My Blog</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex gap-6 font-medium text-gray-600">
                        <Link href="/" className="transition-colors hover:text-blue-600">
                            Trang chủ
                        </Link>
                        <Link href="/blog" className="transition-colors hover:text-blue-600">
                            Blog
                        </Link>
                        <Link href="/about" className="transition-colors hover:text-blue-600">
                            Giới thiệu
                        </Link>
                        <Link href="/contact" className="transition-colors hover:text-blue-600">
                            Liên hệ
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}