// app/blog/page.tsx
import { getPosts } from '@/lib/api';
import PostCard from '@/components/blog/PostCard';

export default async function BlogPage() {
  // Fetch data trực tiếp trên Server Component
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Bài viết mới nhất
          </h1>
          <p className="text-lg text-gray-600">
            Khám phá các kiến thức về Next.js, React và kinh nghiệm lập trình.
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500">Hiện chưa có bài viết nào.</p>
          </div>
        )}
      </div>
    </main>
  );
}