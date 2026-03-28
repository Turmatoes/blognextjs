// lib/validations.ts
import { z } from 'zod';

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, 'Tên phải có ít nhất 2 ký tự')
        .max(50, 'Tên không được quá 50 ký tự'),
    email: z
        .string()
        .email('Email không hợp lệ'),
    message: z
        .string()
        .min(10, 'Tin nhắm phải có ít nhất 10 ký tự')
        .max(500, 'Tin nhắn không được quá 500 ký tự'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const commentSchema = z.object({
    name: z
        .string()
        .min(2, 'Tên phải có ít nhất 2 ký tự')
        .max(50, 'Tên không được quá 50 ký tự'),
    content: z
        .string()
        .min(5, 'Bình luận phải có ít nhất 5 ký tự')
        .max(500, 'Bình luận không được quá 500 ký tự'),
});

export type CommentFormData = z.infer<typeof commentSchema>;