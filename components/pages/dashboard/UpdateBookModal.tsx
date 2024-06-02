import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';

interface UpdateBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (book: any) => void;
  book: any;
}

const UpdateBookModal: React.FC<UpdateBookModalProps> = ({ isOpen, onClose, onUpdate, book }) => {
  const [name, setName] = useState(book.name);
  const [publisher, setPublisher] = useState(book.publisher);
  const [stock, setStock] = useState(book.stock);
  const [price, setPrice] = useState(book.price);
  const [company, setCompany] = useState(book.company);

  useEffect(() => {
    setName(book.name);
    setPublisher(book.publisher);
    setStock(book.stock);
    setPrice(book.price);
    setCompany(book.company);
  }, [book]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedPrice = `Rp ${Number(price).toLocaleString('id-ID')}`;
    onUpdate({ ...book, name, publisher, stock: Number(stock), price: formattedPrice, company });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white rounded max-w-md mx-auto p-4 shadow-lg w-[700px]">
          <Dialog.Title className="text-xl font-bold">Update Buku</Dialog.Title>
          <form onSubmit={handleUpdate} className="space-y-4 mt-4">
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
                className="px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Batal
              </button>
              <button 
                type="submit" 
                className="px-4 py-2 text-sm font-medium text-white bg-[#8884d8] border border-transparent rounded-md shadow-sm hover:bg-[#514d9f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b2aef4]"
              >
                Update Buku
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateBookModal;
