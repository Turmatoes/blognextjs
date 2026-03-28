export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-100 border-t-primary-600"></div>
        <p className="text-gray-500 font-medium animate-pulse">Đang tải...</p>
      </div>
    </div>
  );
}
