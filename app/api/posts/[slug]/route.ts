import { NextResponse } from 'next/server';
import { Post } from '@/types';
import postsData from '@/data/posts.json';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = (postsData as Post[]).find(p => p.slug === params.slug);
  
  if (!post) {
    return NextResponse.json({ error: 'Không tìm thấy bài viết' }, { status: 404 });
  }

  return NextResponse.json({ data: post });
}
