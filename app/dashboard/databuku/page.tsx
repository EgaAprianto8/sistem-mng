'use client'

import { useState, useEffect } from 'react';
import BookTable from '@/components/pages/BookTable';
import { getBooks, setBooks } from '@/components/utils/localStorage';

const Beranda = () => {
  const [books, setBooksState] = useState<any[]>([]);

  useEffect(() => {
    setBooksState(getBooks());
  }, []);

  const deleteBook = (index: number) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
    setBooksState(newBooks);
  };

  const updateBook = (index: number, book: any) => {
    const newBooks = books.map((b, i) => (i === index ? book : b));
    setBooks(newBooks);
    setBooksState(newBooks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Stok Gudang</h1>
      <BookTable books={books} onDelete={deleteBook} onUpdate={updateBook} />
    </div>
  );
};

export default Beranda;
