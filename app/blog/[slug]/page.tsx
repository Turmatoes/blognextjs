// app/blog/[slug]/page.tsx
import { getPostBySlug, getPosts } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// SSG: Tạo sẵn các route tĩnh dựa trên slug
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// SEO: Tự động tạo thẻ meta cho từng bài viết
export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: 'Không tìm thấy bài viết' };

  return {
    title: `${post.title} | My Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Header bài viết */}
      <header className="container mx-auto px-4 max-w-3xl pt-12 pb-8">
        <div className="flex gap-2 mb-4 text-sm font-medium text-blue-600 uppercase">
          <span>{post.category.name}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src={post.author.avatar} alt={post.author.name} fill />
          </div>
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-sm">
              {format(new Date(post.publishedAt), 'dd MMMM, yyyy', { locale: vi })} • {post.readingTime} phút đọc
            </p>
          </div>
        </div>
      </header>

      {/* Ảnh bìa lớn */}
      <div className="container mx-auto px-4 max-w-5xl mb-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        </div>
      </div>

      {/* Nội dung bài viết */}
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg prose-blue">
        {/* Ở đây bạn có thể dùng thư viện react-markdown hoặc dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}

export const revalidate = 3600; // Làm mới trang sau mỗi 1 giờ