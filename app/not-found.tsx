import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center mt-20">
      <h2 className="text-6xl font-extrabold text-primary-600 mb-6 drop-shadow-sm">404</h2>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Trang không tồn tại</h3>
      <p className="text-gray-600 mb-8 max-w-md text-lg">Rất tiếc, liên kết bạn đang tìm kiếm không có thực hoặc đã bị tác giả gỡ bỏ.</p>
      <Link href="/">
        <Button variant="primary">Trở về Trang chủ</Button>
      </Link>
    </div>
  );
}
