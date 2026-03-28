// components/forms/CommentForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { commentSchema, type CommentFormData } from '@/lib/validations';
import { Comment } from '@/types';

interface CommentFormProps {
    postId: string;
}

export default function CommentForm({ postId }: CommentFormProps) {
    // Optimistic update state
    const [comments, setComments] = useState<Comment[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<CommentFormData>({
        resolver: zodResolver(commentSchema),
    });

    const onSubmit = async (data: CommentFormData) => {
        // Giả lập gọi API
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Tạo object Comment mới để thêm vào danh sách
        const newComment: Comment = {
            id: Math.random().toString(36).substring(7),
            postId,
            author: data.name,
            email: 'user@example.com', // Dữ liệu giả lập
            content: data.content,
            createdAt: new Date().toISOString(),
        };

        // Thêm bình luận vào danh sách (optimistic update)
        setComments((prev) => [newComment, ...prev]);
        reset();
    };

    return (
        <div className="space-y-8">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-xl space-y-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100"
            >
                <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Để lại bình luận</h3>
                </div>

                {/* Name Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Họ tên
                    </label>
                    <input
                        {...register('name')}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nguyễn Văn A"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs mt-1 italic">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Content Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nội dung bình luận
                    </label>
                    <textarea
                        {...register('content')}
                        rows={3}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                            errors.content ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nhập nội dung..."
                    />
                    {errors.content && (
                        <p className="text-red-500 text-xs mt-1 italic">
                            {errors.content.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Đang gửi...
                        </span>
                    ) : (
                        'Gửi bình luận'
                    )}
                </button>
            </form>

            {/* Hiển thị bình luận */}
            {comments.length > 0 && (
                <div className="space-y-4 max-w-xl px-2">
                    <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
                        Bình luận ({comments.length})
                    </h3>
                    <div className="divide-y relative">
                        {comments.map((comment) => (
                            <div key={comment.id} className="py-4 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-gray-900">{comment.author}</span>
                                    <span className="text-xs text-gray-500">
                                        {new Date(comment.createdAt).toLocaleDateString('vi-VN')}
                                    </span>
                                </div>
                                <p className="text-gray-700">{comment.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
