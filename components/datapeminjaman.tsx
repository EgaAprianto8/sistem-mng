import { peminjamanData } from '@/types/peminjaman';
import { MdEdit, MdDelete } from 'react-icons/md';

const dataPeminjam: peminjamanData[] = [
    {
        id: 1,
        namaPeminjam: 'John Doe',
        judulBuku: 'Package A',
        tanggalPinjam: '2024-01-19',
        tanggalKembali: '2024-02-02',
        status: 'Dipinjam',
    },
    {
        id: 2,
        namaPeminjam: 'Jane Doe',
        judulBuku: 'Package B',
        tanggalPinjam: '2024-01-15',
        tanggalKembali: '2024-02-01',
        status: 'Dikembalikan',
    },
    // Tambahkan data peminjaman lain jika diperlukan
];

const DaftarPeminjaman = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead className="min-w-full">
                        <tr className="bg-gray-2 text-left dark:bg-meta-4 text-sm">
                            <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">No.</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Nama Peminjam
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Judul Buku
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Tanggal Pinjam
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Tanggal Kembali
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Status</th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {dataPeminjam.map((peminjaman, index) => (
                            <tr key={peminjaman.id}>
                                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                    <h5 className="font-medium text-black dark:text-white mx-auto">{index + 1}</h5>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">{peminjaman.namaPeminjam}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">{peminjaman.judulBuku}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">{peminjaman.tanggalPinjam}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p className="text-black dark:text-white">{peminjaman.tanggalKembali}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <p
                                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                                            peminjaman.status === 'Dipinjam'
                                                ? 'text-warning bg-warning'
                                                : 'text-success bg-success'
                                        }`}
                                    >
                                        {peminjaman.status}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <div className="flex items-center space-x-3.5">
                                        <button title="edit" className="hover:text-primary">
                                            <MdEdit size={20} />
                                        </button>
                                        <button title="delete" className="hover:text-primary">
                                            <MdDelete size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DaftarPeminjaman;
