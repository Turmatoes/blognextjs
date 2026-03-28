import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
    email: z.string().email('Email không hợp lệ'),
    subject: z.string().min(5, 'Tiêu đề phải có ít nhất 5 ký tự'),
    message: z.string().min(10, 'Nội dung phải có ít nhất 10 ký tự'),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate bằng safeParse thay vì parse() để tránh throw error logic
        const validationResult = contactSchema.safeParse(body);
        
        if (!validationResult.success) {
            return NextResponse.json(
                { success: false, errors: validationResult.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const validatedData = validationResult.data;

        // TODO: Send email, save to database, etc.
        console.log('Contact form submission:', validatedData);

        // Simulate processing
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.',
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Đã có lỗi xảy ra' },
            { status: 500 }
        );
    }
}
