'use client'

import React, { useState, useEffect } from 'react';

const parseFormattedPrice = (formattedPrice: any) => {
  return Number(formattedPrice.replace(/[^\d.-]/g, ''));
};

const formatCurrency = (amount: number) => {
  return amount.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  });
};

const DataPengeluaran = () => {
  const [books, setBooksState] = useState<any[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<any[]>([]);
  const [invoice, setInvoice] = useState<any | null>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [customerDetails, setCustomerDetails] = useState<any | null>(null);
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [selectedBookIndex, setSelectedBookIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storedBooks = window.localStorage.getItem('books');
      setBooksState(storedBooks ? JSON.parse(storedBooks) : []);

      const storedHistory = window.localStorage.getItem('history');
      setHistory(storedHistory ? JSON.parse(storedHistory) : []);
    }
  }, []);

  const saveBooksToLocalStorage = (books: any[]) => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      window.localStorage.setItem('books', JSON.stringify(books));
    }
  };

  const saveHistoryToLocalStorage = (history: any[]) => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      window.localStorage.setItem('history', JSON.stringify(history));
    }
  };

  const handleSelectBook = (index: number) => {
    setSelectedBookIndex(index);
    setShowQuantityModal(true);
  };

  const handleAddBook = (quantity: number) => {
    if (selectedBookIndex !== null) {
      const book = books[selectedBookIndex];
      setSelectedBooks([...selectedBooks, { ...book, quantity }]);
      setShowQuantityModal(false);
      setSelectedBookIndex(null);
    }
  };

  const handleCheckout = () => {
    setShowCustomerModal(true);
  };

  const handleCustomerDetails = (details: any) => {
    setCustomerDetails(details);
    const newBooks = books.map((book) => {
      const selectedBook = selectedBooks.find((b) => b.name === book.name);
      if (selectedBook) {
        return { ...book, stock: book.stock - selectedBook.quantity };
      }
      return book;
    });

    const total = selectedBooks.reduce((acc, book) => acc + parseFormattedPrice(book.price) * book.quantity, 0);

    const newInvoice = {
      id: history.length + 1,
      date: new Date().toLocaleDateString(),
      items: selectedBooks,
      total: total,
      customer: details
    };

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      window.localStorage.setItem('books', JSON.stringify(newBooks));
    }
    setBooksState(newBooks);
    setSelectedBooks([]);
    setInvoice(newInvoice);
    const updatedHistory = [...history, newInvoice];
    setHistory(updatedHistory);
    saveHistoryToLocalStorage(updatedHistory);
    setShowCustomerModal(false);
  };

  const handleViewInvoice = (invoice: any) => {
    setInvoice(invoice);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="bg-white shadow-md rounded-lg mb-6">
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <button 
                    className="px-4 py-2 bg-[#5a6dfa] text-white rounded-md hover:bg-[#303983]"
                    onClick={() => handleSelectBook(index)}
                  >
                    Pilih
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-bold mb-4">Selected Books</h2>
      <ul className="list-disc list-inside bg-white shadow-md rounded-lg p-4">
        {selectedBooks.map((book, index) => (
          <li key={index} className="py-1">{book.name} - {book.quantity}</li>
        ))}
      </ul>
      <button 
        className="px-4 py-2 bg-meta-3 text-white rounded-md hover:bg-success mt-6"
        onClick={handleCheckout}
      >
        Checkout
      </button>
      <h2 className="text-2xl font-bold mt-6 mb-4">Checkout History</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {history.map((invoice, index) => (
            <tr key={index} className="hover:bg-gray-100">  
              <td className="px-6 py-4 whitespace-nowrap">#{invoice.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{invoice.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(invoice.total)+'.000'}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="px-4 py-2 bg-[#5a6dfa] text-white rounded-md hover:bg-[#303983]"
                  onClick={() => handleViewInvoice(invoice)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showQuantityModal && (
        <QuantityModal 
          onClose={() => setShowQuantityModal(false)}
          onSave={handleAddBook}
        />
      )}
      {showCustomerModal && (
        <CustomerModal 
          onClose={() => setShowCustomerModal(false)}
          onSave={handleCustomerDetails}
        />
      )}
      {invoice && (
        <InvoiceModal 
          invoice={invoice}
          onClose={() => setInvoice(null)}
        />
      )}
    </div>
  );
};

const QuantityModal = ({ onClose, onSave }: { onClose: () => void, onSave: (quantity: number) => void }) => {
  const [quantity, setQuantity] = useState(1);

  const handleSave = () => {
    onSave(quantity);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-99999 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Masukkan Jumlah</h2>
        <input 
          type="number" 
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
        <div className="flex justify-end">
          <button 
            className="px-4 py-2 bg-bodydark text-white rounded-md hover:bg-body mr-2"
            onClick={onClose}
          >
            Batal
          </button>
          <button 
            className="px-4 py-2 bg-[#5a6dfa] text-white rounded-md hover:bg-[#303983]"
            onClick={handleSave}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomerModal = ({ onClose, onSave }: { onClose: () => void, onSave: (details: any) => void }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    onSave({ name, address });
  };

  return (
    <div className="fixed inset-0 z-99999 flex items-center justify-center  bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Masukkan Detail Pelanggan</h2>
        <input 
          type="text" 
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea 
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          placeholder="Alamat"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="flex justify-end">
          <button 
            className="px-4 py-2 bg-bodydark text-white rounded-md hover:bg-body mr-2"
            onClick={onClose}
          >
            Batal
          </button>
          <button 
            className="px-4 py-2 bg-[#5a6dfa] text-white rounded-md hover:bg-[#303983]"
            onClick={handleSave}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

const InvoiceModal = ({ invoice, onClose }: { invoice: any, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-99999 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <div className='flex justify-end'>
          <button 
            className="px-4 py-2 text-[#8A99AF] rounded-md mr-2"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <Invoice invoice={invoice} />
        <div className="flex justify-end mt-4 gap-2">
          <button 
            className="px-4 py-2 bg-[#5a6dfa] text-white rounded-md hover:bg-[#303983]"
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

const Invoice = ({ invoice }: { invoice: any }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Invoice #{invoice.id}</h2>
      <p><strong>Date:</strong> {invoice.date}</p>
      <p><strong>Customer:</strong> {invoice.customer.name}</p>
      <p><strong>Address:</strong> {invoice.customer.address}</p>
      <table className="min-w-full bg-white shadow-md rounded-lg mt-4">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoice.items.map((item: any, index: number) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(parseFormattedPrice(item.price) * item.quantity)+'.000'}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="px-6 py-4 text-right font-bold">Total</td>
            <td className="px-6 py-4">{formatCurrency(invoice.total)+'.000'}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DataPengeluaran;
