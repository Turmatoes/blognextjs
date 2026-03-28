// components/blog/PostList.tsx
import { Post } from '@/types';
import PostCard from './PostCard';

interface PostListProps {
    posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
    // Xử lý Empty State
    if (!posts || posts.length === 0) {
        return (
            <div className="bg-white p-12 rounded-lg text-center shadow-sm border w-full">
                <p className="text-gray-500 text-lg">Không tìm thấy bài viết nào.</p>
            </div>
        );
    }

    // Render grid của PostCard
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
