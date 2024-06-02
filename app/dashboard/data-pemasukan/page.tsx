'use client'
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import BookForm from '@/components/pages/dashboard/BookForm';
import { getBooks, setBooks } from '@/components/utils/localStorage';

const DataPemasukan = () => {
  const [books, setBooksState] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setBooksState(getBooks());
  }, []);

  const addBook = (book: any) => {
    const newBooks = [...books, book];
    setBooks(newBooks);
    setBooksState(newBooks);
  };

  const chartData = books.reduce((acc: any[], book) => {
    const existingCompany = acc.find((item) => item.company === book.company);
    if (existingCompany) {
      existingCompany.stock += book.stock;
    } else {
      acc.push({ company: book.company, stock: book.stock });
    }
    return acc;
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Data Pemasukan</h2>
      <div className="mb-6">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="company" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <table className="min-w-full divide-y divide-gray-200 mb-6">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Perusahaan</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Buku</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penerbit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{book.company}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.publisher}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.stock}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.dateAdded}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Tambah Buku
      </button>
      <BookForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={addBook} />
    </div>
  );
};

export default DataPemasukan;
