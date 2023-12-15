/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
import prisma from '@/prisma/db';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/* eslint-disable @typescript-eslint/naming-convention */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const posts = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (e: Error | unknown) {
    return NextResponse.json(e, { status: 500 });
  }
}
