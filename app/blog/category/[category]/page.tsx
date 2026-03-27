interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bài viết theo danh mục: {params.category}</h1>
      {/* PostList component will be used here */}
    </main>
  );
}
