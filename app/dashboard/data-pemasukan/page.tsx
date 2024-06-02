'use client'
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import BookForm from '@/components/pages/dashboard/BookForm';

const DataPemasukan = () => {
  const [books, setBooksState] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== "undefined") {
      const storedBooks = window.localStorage.getItem('books');
      setBooksState(storedBooks ? JSON.parse(storedBooks) : []);
    }
  }, []);

  const saveBooksToLocalStorage = (books: any[]) => {
    if (typeof window !== 'undefined' && typeof localStorage !== "undefined") {
      window.localStorage.setItem('books', JSON.stringify(books));
    }
  };

  const addBook = (book: any) => {
    const newBooks = [...books, book];
    setBooksState(newBooks);
    saveBooksToLocalStorage(newBooks);
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
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm mb-4 font-medium rounded-md text-white bg-[#8884d8] shadow-sm hover:bg-[#4a477d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7470b9]"
              >
                Tambah Buku
              </button>
              <BookForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={addBook} />
      <table className="min-w-full divide-y divide-gray-200 mb-6">
        <thead className="bg-bodydark1">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-strokedark uppercase tracking-wider">Perusahaan</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-strokedark uppercase tracking-wider">Nama Buku</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-strokedark uppercase tracking-wider">Penerbit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-strokedark uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-strokedark uppercase tracking-wider">Harga</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-strokedark uppercase tracking-wider">Tanggal</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-bodydark2">
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
    </div>
  );
};

export default DataPemasukan;
