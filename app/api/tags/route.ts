/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
import prisma from '@/prisma/db';
import { NextResponse } from 'next/server';

/* eslint-disable @typescript-eslint/naming-convention */
export async function GET() {
  try {
    const tags = await prisma.tag.findMany();
    return NextResponse.json(tags, { status: 200 });
  } catch (e: Error | unknown) {
    return NextResponse.json(e, { status: 500 });
  }
}
