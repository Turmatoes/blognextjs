// app/(marketing)/contact/page.tsx
import ContactForm from '@/components/forms/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react'; // Thêm icon cho sinh động

export const metadata = {
  title: 'Liên hệ | Phi Long',
  description: 'Gửi tin nhắn cho chúng tôi để được giải đáp thắc mắc.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm border p-8 md:p-12">

          {/* Cột trái: Thông tin liên hệ */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Liên hệ</h1>
              <p className="text-gray-600">
                Bạn có câu hỏi hoặc muốn hợp tác? Hãy điền thông tin vào biểu mẫu, chúng tôi sẽ phản hồi sớm nhất có thể.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-gray-600">contact@myblog.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-700">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Điện thoại</p>
                  <p className="text-gray-600">+84 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-700">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Văn phòng</p>
                  <p className="text-gray-600">Hà Nội, Việt Nam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Form liên hệ */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
}