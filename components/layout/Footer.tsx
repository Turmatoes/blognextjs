import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-auto border-t border-gray-800 mt-20">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-bold text-white tracking-tight block mb-2 hover:text-primary-400 transition-colors">
            Phi Long
          </Link>
          <p className="text-sm">Nền tảng chia sẻ kiến thức lập trình và công nghệ.</p>
        </div>

        {/* Basic Links */}
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Bài viết</Link>
          <Link href="/about" className="hover:text-white transition-colors">Giới thiệu</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Liên hệ</Link>
        </nav>
      </div>

      {/* Copyright */}
      <div className="container mt-8 pt-6 border-t border-gray-800/50 text-sm text-center flex flex-col items-center justify-center">
        <p>© {new Date().getFullYear()} Phi Long. All rights reserved.</p>
      </div>
    </footer>
  );
}
