// utils/getQueryOutput.js
import prisma from './prisma';

export const queryData = async () => {
    try {
        const queryOutput = await prisma.siswa.findMany({
            include: {
                kelas: true
            },
            orderBy: {
                kelas: {
                    nama_kelas: 'asc'
                }
            }
        });
        return queryOutput;
    } catch (error) {
        console.log(error);
        return []; // Return an empty array on error
    }
}
