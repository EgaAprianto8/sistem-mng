// app/api/siswa/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const students = await prisma.siswa.findMany({
      include: { kelas: true },
    });
    return NextResponse.json(students);
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.error(new Error(error.message));
  }
}

export async function POST(request: Request) {
  try {
    const { nama_siswa, kelasID } = await request.json();
    console.log('Received data:', { nama_siswa, kelasID }); // Log data received
    const student = await prisma.siswa.create({
      data: { nama_siswa, kelasID: parseInt(kelasID, 10) },
    });
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.error(new Error(error.message));
  }
}

export async function PUT(request: Request) {
  try {
    const { id, nama_siswa, kelasID } = await request.json();
    const student = await prisma.siswa.update({
      where: { id: Number(id) },
      data: { nama_siswa, kelasID: parseInt(kelasID, 10) },
    });
    return NextResponse.json(student);
  } catch (error) {
    console.error('PUT Error:', error);
    return NextResponse.error(new Error(error.message));
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.siswa.delete({
      where: { id: Number(id) },
    });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('DELETE Error:', error);
    return NextResponse.error(new Error(error.message));
  }
}
