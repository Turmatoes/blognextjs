import PostCard from '@/components/blog/PostCard';
import postsData from '@/data/posts.json';
import { Post } from '@/types';

export default function BlogPage() {
  const posts = postsData as Post[];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
