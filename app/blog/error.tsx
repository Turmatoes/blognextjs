'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] py-12 text-center bg-gray-50 rounded-lg container mx-auto mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Không thể tải nội dung!</h2>
      <p className="text-gray-600 mb-6 font-medium">Đã có lỗi xảy ra khi lấy danh sách hoặc bài viết bạn yêu cầu.</p>
      <Button onClick={() => reset()} variant="outline">
        Tải lại nội dung
      </Button>
    </div>
  );
}
