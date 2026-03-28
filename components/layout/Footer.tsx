import Link from 'next/link';
import { Globe, MessageCircle, Monitor, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-auto">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-5">
          <Link href="/" className="text-3xl font-extrabold text-white tracking-tighter mb-6 inline-block">
            MyBlog<span className="text-primary-500">.</span>
          </Link>
          <p className="text-base text-gray-400 max-w-sm mb-8 leading-relaxed">
            Nền tảng chia sẻ kiến thức, kinh nghiệm lập trình và thiết kế dành riêng cho cộng đồng Next.js và React tại Việt Nam.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="p-2.5 bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1">
              <Globe size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="p-2.5 bg-gray-800 rounded-full hover:bg-blue-400 hover:text-white transition-all transform hover:-translate-y-1">
              <MessageCircle size={18} />
            </a>
            <a href="#" aria-label="Github" className="p-2.5 bg-gray-800 rounded-full hover:bg-gray-600 hover:text-white transition-all transform hover:-translate-y-1">
              <Monitor size={18} />
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-bold text-white mb-6">Khám phá</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link href="/" className="flex items-center group hover:text-primary-400 transition-colors">
                <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary-500" />
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="flex items-center group hover:text-primary-400 transition-colors">
                <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary-500" />
                Bài viết mới
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center group hover:text-primary-400 transition-colors">
                <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary-500" />
                Về chúng tôi
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-4">
           <h3 className="text-lg font-bold text-white mb-6">Đăng ký nhận tin mới</h3>
           <p className="text-sm text-gray-400 mb-4">Để lại email để không bỏ lỡ những bài viết thú vị hàng tuần.</p>
           <form className="flex rounded-md overflow-hidden bg-gray-800 p-1">
             <div className="flex items-center pl-3">
               <Mail size={16} className="text-gray-400" />
             </div>
             <input 
               type="email" 
               placeholder="Nhập email của bạn..." 
               className="w-full bg-transparent px-3 py-2 text-sm text-white focus:outline-none"
               required
             />
             <button type="submit" className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-primary-500 transition-colors">
               Gửi
             </button>
           </form>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="container mt-16 pt-8 border-t border-gray-800/80 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} MyBlog by Next.js Agent. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-primary-400 transition-colors">Điều khoản</Link>
          <Link href="#" className="hover:text-primary-400 transition-colors">Bảo mật ưu tiên</Link>
        </div>
      </div>
    </footer>
  );
}
