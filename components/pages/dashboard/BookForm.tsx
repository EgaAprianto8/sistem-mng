import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

interface BookFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (book: any) => void;
}

const BookForm: React.FC<BookFormProps> = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [publisher, setPublisher] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [company, setCompany] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedPrice = `Rp ${Number(price).toLocaleString('id-ID')}`;
    const dateAdded = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const book = { name, publisher, stock, price: formattedPrice, company, dateAdded };
    onAdd(book);
    setName('');
    setPublisher('');
    setStock(0);
    setPrice(0);
    setCompany('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-99999 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white rounded max-w-md mx-auto p-4 shadow-lg w-[700px]">
          <Dialog.Title className="text-xl font-bold">Tambah Buku</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Buku</label>
              <input 
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Penerbit</label>
              <input 
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={publisher} 
                onChange={(e) => setPublisher(e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Stock</label>
              <input 
                type="number" 
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={stock} 
                onChange={(e) => setStock(Number(e.target.value))} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Harga (Rp)</label>
              <input 
                type="number" 
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Perusahaan</label>
              <input 
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={company} 
                onChange={(e) => setCompany(e.target.value)} 
              />
            </div>
            <div className="flex justify-end">
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Batal
              </button>
              <button 
                type="submit" 
                className="px-4 py-2 text-sm font-medium text-white bg-[#8884d8] border border-transparent rounded-md shadow-sm hover:bg-[#514d9f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b2aef4]"
              >
                Tambah Buku
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default BookForm;
