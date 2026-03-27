import { NextResponse } from 'next/server';
import { Post } from '@/types';
import postsData from '@/data/posts.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // Optional: Thêm logic pagination hoặc filter
  
  return NextResponse.json({
    data: postsData as Post[],
    total: postsData.length
  });
}
