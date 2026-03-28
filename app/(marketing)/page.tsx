// app/(marketing)/page.tsx
import { getPosts } from '@/lib/api';
import PostList from '@/components/blog/PostList';
import Link from 'next/link';

export default async function HomePage() {
  // Lấy 6 bài viết mới nhất để hiển thị ở trang chủ
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 6);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Chào mừng đến với My Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nơi chia sẻ kiến thức, kinh nghiệm về lập trình và công nghệ mới nhất.
          </p>
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-colors"
          >
            Khám phá ngay
          </Link>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Bài viết mới nhất</h2>
              <p className="text-gray-600 mt-2">Cập nhật những thông tin hữu ích mỗi ngày</p>
            </div>
            <Link href="/blog" className="text-blue-600 font-semibold hover:underline">
              Xem tất cả →
            </Link>
          </div>

          <PostList posts={latestPosts} />
        </div>
      </section>
    </main>
  );
}
