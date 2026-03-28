// app/blog/page.tsx
import { getPosts } from '@/lib/api';
import PostList from '@/components/blog/PostList';
import SearchBar from '@/components/blog/SearchBar';

interface BlogPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Next.js 15+ yêu cầu await searchParams
  const { q, category } = await searchParams;

  const posts = await getPosts();

  // Logic lọc bài viết đơn giản (nếu api chưa hỗ trợ filter)
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = q ? post.title.toLowerCase().includes(q.toLowerCase()) : true;
    const matchesCategory = category ? post.category?.slug === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Tất cả bài viết</h1>
          <p className="text-gray-600 mb-8">Tìm kiếm thông tin bạn cần qua các chủ đề bên dưới.</p>

          <SearchBar />

          <div className="mt-10">
            {filteredPosts.length > 0 ? (
              <PostList posts={filteredPosts} />
            ) : (
              <div className="bg-white p-12 rounded-lg text-center shadow-sm border">
                <p className="text-gray-500 text-lg">Không tìm thấy bài viết nào phù hợp.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}