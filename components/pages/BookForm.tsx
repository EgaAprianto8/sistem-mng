import React, { useState } from 'react';

interface BookFormProps {
  onAdd: (book: any) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [publisher, setPublisher] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [company, setCompany] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedPrice = `Rp ${Number(price).toLocaleString('id-ID')}`;
    const book = { name, publisher, stock, price: formattedPrice, company };
    onAdd(book);
    setName('');
    setPublisher('');
    setStock(0);
    setPrice(0);
    setCompany('');
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Tambah Buku</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Buku</label>
          <input 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Penerbit</label>
          <input 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={publisher} 
            onChange={(e) => setPublisher(e.target.value)} 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Stock</label>
          <input 
            type="number" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={stock} 
            onChange={(e) => setStock(Number(e.target.value))} 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Harga (Rp)</label>
          <input 
            type="number" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={price} 
            onChange={(e) => setPrice(Number(e.target.value))} 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Perusahaan</label>
          <input 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={company} 
            onChange={(e) => setCompany(e.target.value)} 
          />
        </div>
        <button 
          type="submit" 
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Tambah Buku
        </button>
      </form>
    </div>
  );
};

export default BookForm;
