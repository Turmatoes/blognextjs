interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">
        Bài viết: {params.slug}
      </h1>
      <p className="mt-4">
        Nội dung bài viết sẽ hiển thị ở đây...
      </p>
    </div>
  );
}
