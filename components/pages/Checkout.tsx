import { useState, useEffect } from 'react';
import { getBooks, setBooks } from '../utils/localStorage';

const DataPengeluaran = () => {
  const [books, setBooksState] = useState<any[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<any[]>([]);

  useEffect(() => {
    setBooksState(getBooks());
  }, []);

  const handleSelectBook = (index: number) => {
    const book = books[index];
    const quantity = prompt('Jumlah', '1');
    if (quantity !== null) {
      setSelectedBooks([...selectedBooks, { ...book, quantity: Number(quantity) }]);
    }
  };

  const handleCheckout = () => {
    const newBooks = books.map((book) => {
      const selectedBook = selectedBooks.find((b) => b.name === book.name);
      if (selectedBook) {
        return { ...book, stock: book.stock - selectedBook.quantity };
      }
      return book;
    });

    setBooks(newBooks);
    setBooksState(newBooks);
    setSelectedBooks([]);
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
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
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
      <button 
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mb-6"
        onClick={handleCheckout}
      >
        Checkout
      </button>
      <h2 className="text-2xl font-bold mb-4">Selected Books</h2>
      <ul className="list-disc list-inside bg-white shadow-md rounded-lg p-4">
        {selectedBooks.map((book, index) => (
          <li key={index} className="py-1">{book.name} - {book.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataPengeluaran;
