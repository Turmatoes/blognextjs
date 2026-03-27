interface PostDetailPageProps {
  params: {
    slug: string;
  };
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Chi tiết bài viết: {params.slug}</h1>
      {/* PostContent component will be used here */}
    </main>
  );
}
