import React from 'react';

interface BookTableProps {
  books: any[];
  onDelete: (index: number) => void;
  onUpdate: (index: number) => void;
}

const BookTable: React.FC<BookTableProps> = ({ books, onDelete, onUpdate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Buku</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penerbit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Perusahaan</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{book.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.publisher}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.stock}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.company}</td>
              <td className="px-6 py-4 whitespace-nowrap space-x-2">
                <button 
                  className="px-4 py-2 bg-meta-6 text-white rounded-md hover:bg-[#806b31]"
                  onClick={() => onUpdate(index)}
                >
                  Update
                </button>
                <button 
                  className="px-4 py-2 bg-meta-1 text-white rounded-md hover:bg-[#552127]"
                  onClick={() => onDelete(index)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
