// components/blog/PostCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Post } from '@/types';

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <Link href={`/blog/${post.slug || post.id}`}>
            <article className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Cover Image */}
                <div className="relative h-48 w-full">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="p-5">
                    {/* Category (Nếu có) */}
                    {post.category && (
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            {post.category.name}
                        </span>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold mt-2 mb-2 line-clamp-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                    </p>

                    {/* Footer Card: Date & Reading Time */}
                    <div className="flex items-center justify-between mt-auto">
                        <time className="text-xs text-gray-400">
                            {format(new Date(post.publishedAt), 'dd MMMM, yyyy', {
                                locale: vi,
                            })}
                        </time>
                        {post.readingTime && (
                            <span className="text-xs text-gray-400">
                                {post.readingTime} phút đọc
                            </span>
                        )}
                    </div>
                </div>
            </article>
        </Link>
    );
}