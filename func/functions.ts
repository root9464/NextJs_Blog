/* eslint-disable @typescript-eslint/indent */
import prisma from '@/prisma/db';

export const getPost = async () => {
  const res = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return res;
};

export const getDataPost = async (id: string) => {
  const res = await prisma.post.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
  return res;
};
