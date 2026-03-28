'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Error({
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
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Đã có lỗi xảy ra!</h2>
      <p className="text-gray-600 mb-8 max-w-md">Chúng tôi xin lỗi vì sự bất tiện này. Đã có lỗi hệ thống không mong muốn xảy ra.</p>
      <Button onClick={() => reset()} variant="primary">
        Thử lại trang
      </Button>
    </div>
  );
}
