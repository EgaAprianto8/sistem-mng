'use client'

import React from 'react';

interface BookTableProps {
  books: any[];
  onDelete: (index: number) => void;
  onUpdate: (index: number, book: any) => void;
}

const BookTable: React.FC<BookTableProps> = ({ books, onDelete, onUpdate }) => {
  const handleUpdate = (index: number) => {
    const name = prompt('Nama Buku', books[index].name);
    const publisher = prompt('Penerbit', books[index].publisher);
    const stock = prompt('Stock', books[index].stock);

    if (name !== null && publisher !== null && stock !== null) {
      onUpdate(index, { name, publisher, stock: Number(stock) });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Buku</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penerbit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{book.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.publisher}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.stock}</td>
              <td className="px-6 py-4 whitespace-nowrap space-x-2">
                <button 
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  onClick={() => handleUpdate(index)}
                >
                  Update
                </button>
                <button 
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => onDelete(index)}
                >
                  Delete
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
