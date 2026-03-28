import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: 'MyBlog - Chia sẻ kiến thức Next.js & React',
  description: 'Nền tảng chia sẻ những kiến thức mới nhất, chất lượng về lập trình, thiết kế, UI/UX.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Navigation Header */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* General Footer */}
        <Footer />
      </body>
    </html>
  );
}
