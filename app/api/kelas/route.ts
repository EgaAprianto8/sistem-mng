// app/api/kelas/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const classes = await prisma.kelas.findMany();
    return NextResponse.json(classes);
  } catch (error) {
    return NextResponse.error(new Error(error.message));
  }
}
