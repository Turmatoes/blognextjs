import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Xử lý gửi email hoặc lưu database ở đây
    
    return NextResponse.json({ message: 'Gửi liên hệ thành công!', data: body }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
  }
}
