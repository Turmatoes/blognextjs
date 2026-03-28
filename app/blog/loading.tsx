// app/blog/loading.tsx
export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="animate-pulse">
                {/* Skeleton cho tiêu đề */}
                <div className="h-10 bg-gray-200 rounded-md w-1/3 mb-4"></div>
                <div className="h-6 bg-gray-100 rounded-md w-1/2 mb-12"></div>

                {/* Skeleton cho Grid bài viết */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm">
                            {/* Giả lập ảnh cover */}
                            <div className="bg-gray-200 h-48 w-full"></div>
                            {/* Giả lập nội dung text */}
                            <div className="p-5 space-y-4">
                                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                <div className="h-6 bg-gray-200 rounded w-full"></div>
                                <div className="h-6 bg-gray-200 rounded w-5/6"></div>
                                <div className="flex justify-between pt-4">
                                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}