/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/consistent-type-definitions */

/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
import prisma from '@/prisma/db';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/* eslint-disable @typescript-eslint/naming-convention */
export interface contextProps {
  params: {
    posId: string;
  };
}

// Deletes a post from the database.

export async function DELETE(req: NextRequest, context: contextProps) {
  try {
    await prisma.post.delete({
      where: {
        id: context.params.posId,
      },
    });
    return new Response('worked', { status: 204 });
  } catch (e: Error | unknown) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, context: contextProps) {
  try {
    const body = await req.json();
    await prisma.post.update({
      where: {
        id: context.params.posId,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });
    return new Response('update success', { status: 204 });
  } catch (e: Error | unknown) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function GET(req: NextRequest, context: contextProps) {
  try {
    const posts = await prisma.post.findFirst({
      where: {
        id: context.params.posId,
      },
      include: {
        tag: true,
      },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (e: Error | unknown) {
    return NextResponse.json(e, { status: 500 });
  }
}
