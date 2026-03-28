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
          src="https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-9/146994739_261040135545019_2600529356075627518_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_ohc=As6uRjeEvP8Q7kNvwGMdOkF&_nc_oc=Adq7eUrTIpTlO5tq1SBFlIPSWrkcEBG4Ulve4Q46fwR-JUroy5rdmqeDYHbJr1cV1pg&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=4lOEaEITdwNIi9XbioFsUw&_nc_ss=7a30f&oh=00_Afwrprr5KaVjWFi-3AAbsi1ODgcvxPr617Gs58RRb2EelQ&oe=69EF65A5"
          alt="Phi Long"
          width={120}
          height={120}
          className="rounded-full mb-6 border-4 border-white shadow-md object-cover"
        />
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Phi Long
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-5">
          Chào mừng bạn đến với blog cá nhân của mình! Mình là Nguyễn Xuân Phi Long, một lập trình viên Full-stack trẻ đang sinh sống tại Hà Nội và vừa tốt nghiệp chuyên ngành Kỹ thuật Phần mềm tại Đại học FPT. Với nền tảng vững chắc về Java Spring Boot và ReactJS, mình đam mê xây dựng những hệ thống quản lý tối ưu và có khả năng mở rộng cao. Bên cạnh chuyên môn kỹ thuật, mình còn sở hữu chứng chỉ JLPT N2 và có kinh nghiệm thực tập tại Nhật Bản, giúp mình tự tin làm việc trong môi trường quốc tế.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Blog này là nơi mình chia sẻ những kiến thức về phát triển phần mềm, tư duy hệ thống và hành trình trở thành một Kỹ sư Cầu nối (BrSE) trong tương lai. Hy vọng những trải nghiệm và dự án mình từng thực hiện sẽ mang lại giá trị hữu ích cho cộng đồng lập trình.
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
