import { Package } from '@/types/package';
import { MdEdit, MdDelete } from 'react-icons/md';

const packageData: Package[] = [
    {
        name: 'Package A',
        publishYear: '2022',
        status: 'Tersedia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        publisher: 'Publisher A',
        author: 'Author A',
    },
    {
        name: 'Package B',
        publishYear: '2021',
        status: 'Tidak Tersedia',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        publisher: 'Publisher B',
        author: 'Author B',
    },
    {
        name: 'Package C',
        publishYear: '2023',
        status: 'Tidak Tersedia',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        publisher: 'Publisher C',
        author: 'Author C',
    },
    // Add more dummy data as needed
];

const DataBuku = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead className="min-w-full">
                        <tr className="bg-gray-2 text-left dark:bg-meta-4 text-sm">
                            <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">No.</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Foto Buku
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Judul Buku
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Penulis
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Penerbit
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Tahun Terbit
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                Deskripsi
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Status</th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {packageData.map((packageItem, key) => (
                            <tr key={key}>
                                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                    <h5 className="font-medium text-black dark:text-white mx-auto">{key + 1}</h5>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    <img src="" alt="Placeholder" className="w-10 h-10 object-cover rounded-full" />
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    {/* Adjust this part based on your actual data structure */}
                                    <p className="text-black dark:text-white">{packageItem.name}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    {/* Adjust this part based on your actual data structure */}
                                    <p className="text-black dark:text-white">{packageItem.author}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    {/* Adjust this part based on your actual data structure */}
                                    <p className="text-black dark:text-white">{packageItem.publisher}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    {/* Adjust this part based on your actual data structure */}
                                    <p className="text-black dark:text-white">{packageItem.publishYear}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    {/* Adjust this part based on your actual data structure */}
                                    <p className="text-black dark:text-white line-clamp-2">{packageItem.description}</p>
                                </td>
                                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                    {/* Adjust this part based on your actual data structure */}
                                    <p
                                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                                            packageItem.status === 'Tersedia'
                                                ? 'text-success bg-success'
                                                : packageItem.status === 'Tidak Tersedia'
                                                ? 'text-danger bg-danger'
                                                : 'text-warning bg-warning'
                                        }`}
                                    >
                                        {packageItem.status}
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

export default DataBuku;
