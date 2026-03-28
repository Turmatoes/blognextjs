// components/forms/ContactForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validations';

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        // Giả lập gọi API
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Form data:', data);
        alert('Gửi thành công!');
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md space-y-4 p-4 bg-white rounded-lg shadow-sm border"
        >
            {/* Name Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Họ tên
                </label>
                <input
                    {...register('name')}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="Nguyễn Văn A"
                />
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1 italic">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Email Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    {...register('email')}
                    type="email"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="example@email.com"
                />
                {errors.email && (
                    <p className="text-red-500 text-xs mt-1 italic">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Message Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tin nhắn
                </label>
                <textarea
                    {...register('message')}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="Nội dung tin nhắn..."
                />
                {errors.message && (
                    <p className="text-red-500 text-xs mt-1 italic">
                        {errors.message.message}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
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
                    'Gửi tin nhắn'
                )}
            </button>
        </form>
    );
}