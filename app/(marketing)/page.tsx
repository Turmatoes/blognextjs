import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Trang chủ</h1>
      <p>Danh sách bài viết mới nhất sẽ được hiển thị ở đây.</p>
      <Link href="/blog" className="text-blue-500 hover:underline mt-4 inline-block">
        Xem tất cả bài viết
      </Link>
    </main>
  );
}
