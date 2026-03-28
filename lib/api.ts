// lib/api.ts
import { Post } from '@/types';

export async function getPosts(): Promise<Post[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            next: { revalidate: 3600 }, // Cache trong 1 giờ (Incremental Static Regeneration)
        });

        if (!response.ok) {
            throw new Error('Không thể tải danh sách bài viết');
        }

        const data = await response.json();

        // Chuyển đổi dữ liệu từ API bên ngoài sang chuẩn interface Post của dự án
        const posts: Post[] = data.slice(0, 10).map((item: any) => ({
            id: item.id.toString(),
            title: item.title,
            // Tạo slug đơn giản từ tiêu đề
            slug: item.title
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, ''),
            excerpt: item.body.substring(0, 100) + '...',
            content: item.body,
            // Sử dụng ảnh ngẫu nhiên từ Picsum để giao diện sinh động hơn
            coverImage: `https://picsum.photos/seed/${item.id}/800/450`,
            author: {
                id: '1',
                name: 'Admin',
                avatar: '/images/avatar.jpg',
                bio: 'Blog author',
            },
            category: {
                id: '1',
                name: 'Công nghệ',
                slug: 'cong-nghe',
            },
            publishedAt: new Date().toISOString(),
            tags: ['NextJS', 'React'],
            readingTime: Math.ceil(item.body.split(' ').length / 200), // Tính toán thời gian đọc dựa trên số từ
        }));

        return posts;
    } catch (error) {
        console.error('Lỗi khi fetch posts:', error);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const posts = await getPosts();
    return posts.find((post) => post.slug === slug) || null;
}