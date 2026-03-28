import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/lib/api';
import { format, parseISO } from 'date-fns';

export default async function HomePage() {
  // Lấy 5 bài viết mới nhất
  const posts = await getPosts({ limit: 5 });

  return (
    <div className="container py-16 md:py-24 max-w-3xl mx-auto">
      {/* Phần Bio Giới thiệu bản thân */}
      <section className="mb-16 flex flex-col items-start">
        <Image
          src="https://picsum.photos/seed/philong/200/200" 
          alt="Phi Long"
          width={120}
          height={120}
          className="rounded-full mb-6 border-4 border-white shadow-md object-cover"
        />
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Phi Long
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-5">
          Luôn lạc quan, luôn khao khát (với ẩm thực và tri thức). Cảm thấy đặc biệt thoải mái với những tác phẩm văn học lớn cũng như với các tài liệu kỹ thuật phức tạp. Yêu công nghệ, đam mê xây dựng hệ thống phần mềm và tôi tự nhận mình là người may mắn nhất thế giới.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Tôi sống mỗi ngày với nỗ lực cải thiện bản thân và tin tưởng mãnh liệt rằng mọi chuyện xảy ra đều là những điều tốt đẹp nhất có thể.
        </p>
      </section>

      {/* Phần Danh sách Blog */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b flex items-center justify-between">
          Blog
        </h2>
        
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.id} className="group flex flex-col items-start">
              <Link href={`/blog/${post.slug}`} className="block">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                  {post.title}
                </h3>
              </Link>
              <div className="flex items-center text-sm text-gray-500 mb-3 font-medium">
                <time dateTime={post.publishedAt}>
                  {format(parseISO(post.publishedAt), 'MMMM d, yyyy')}
                </time>
              </div>
              <p className="text-gray-600 line-clamp-2 text-base leading-relaxed">
                {post.excerpt}
              </p>
            </li>
          ))}
        </ul>

        {posts.length > 0 && (
          <div className="mt-12 pt-6 border-t">
            <Link 
              href="/blog"
              className="inline-flex items-center font-bold text-primary-600 hover:text-primary-700 hover:underline transition-all text-lg"
            >
              Xem tất cả các bài viết của tôi →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
