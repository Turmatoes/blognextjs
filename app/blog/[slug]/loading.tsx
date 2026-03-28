export default function LoadingSlug() {
  return (
    <article className="min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4 max-w-3xl pt-12 pb-8 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
        <div className="h-10 md:h-12 bg-gray-200 rounded-lg w-full mb-6 relative overflow-hidden"></div>
        <div className="flex items-center gap-4 mb-8 pb-8 border-b">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="h-3 w-32 bg-gray-200 rounded"></div>
            <div className="h-3 w-48 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl mb-12 animate-pulse">
        <div className="relative aspect-video rounded-2xl bg-gray-100"></div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl space-y-4 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6 mt-6"></div>
      </div>
    </article>
  );
}
