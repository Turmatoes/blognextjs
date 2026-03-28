import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giới thiệu | Phi Long',
  description: 'Tìm hiểu về hành trình phát triển phần mềm và định hướng BrSE của Phi Long.',
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Về Phi Long
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Chào mừng bạn đến với blog của mình. Mình là một lập trình viên Full-stack tại Hà Nội, chuyên tâm vào việc xây dựng các hệ thống quản lý tối ưu và không ngừng chinh phục ngôn ngữ Nhật Bản.
        </p>

        <div className="prose prose-lg prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mục tiêu nghề nghiệp</h2>
          <p className="text-gray-700 leading-relaxed mb-6 block">
            Với nền tảng vững chắc về Java Spring Boot, ReactJS và kinh nghiệm thực tập tại Nhật Bản, mình đang hướng tới vai trò Kỹ sư Cầu nối (BrSE). Blog này là nơi mình ghi lại những kiến thức kỹ thuật, tư duy thiết kế hệ thống và trải nghiệm làm việc trong môi trường quốc tế.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hành trình phát triển</h2>
          <p className="text-gray-700 leading-relaxed mb-6 block">
            Từ những dự án quản lý giáo dục (MVEMS) cho đến các cổng thông tin thực tập (JIT), mình luôn chú trọng vào việc giải quyết các bài toán thực tế thông qua công nghệ. Việc đạt được chứng chỉ JLPT N2 và IELTS 7.0 là minh chứng cho nỗ lực không ngừng để sẵn sàng cho những thử thách tại thị trường Nhật Bản.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 my-10 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3 block">Thế mạnh chuyên môn</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold mb-1">✓</span>
                <span>Phát triển Full-stack với Java Spring Boot và ReactJS hiện đại.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold mb-1">✓</span>
                <span>Sử dụng thành thạo các công cụ AWS S3, Firebase và Docker.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">✓</span>
                <span>Giao tiếp tốt bằng tiếng Nhật (N2) và tiếng Anh (IELTS 7.0).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}