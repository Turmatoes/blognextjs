import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giới thiệu | Phi Long',
  description: 'Tìm hiểu thêm về Phi Long và định hướng phát triển.',
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Về Chúng Tôi
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Chào mừng bạn đến với blog của Phi Long. Nơi chia sẻ những kiến thức, kinh nghiệm thực tế về lập trình, thiết kế web và công nghệ hiện đại.
        </p>

        <div className="prose prose-lg prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sứ mệnh của chúng tôi</h2>
          <p className="text-gray-700 leading-relaxed mb-6 block">
            Được xây dựng với mục tiêu tạo ra một cộng đồng lập trình viên Việt Nam vững mạnh, đây là nơi tôi mang đến các bài viết chuyên sâu về hệ sinh thái React, Next.js, kiến trúc Serverless, và những công nghệ Front-end mới nhất.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lịch sử phát triển</h2>
          <p className="text-gray-700 leading-relaxed mb-6 block">
            Bắt đầu từ một không gian cá nhân nhỏ lẻ để ghi chú lại quá trình tự học và sửa lỗi, trang blog này dần phát triển thành một thư viện kỹ năng thiết yếu dành cho nhiều bạn trẻ. Tôi tin rằng, chia sẻ chính là một cách để học hỏi và tiến bộ không ngừng.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8 my-10 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3 block">Tôn chỉ hoạt động</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold mb-1">✓</span> 
                <span>Nội dung thực tế, áp dụng được ngay vào dự án thực chiến.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold mb-1">✓</span> 
                <span>Liên tục cập nhật theo các xu hướng công nghệ mới nhất.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 font-bold">✓</span> 
                <span>Mã nguồn mở và hoàn toàn miễn phí cho cộng đồng.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
