'use client'

import BookForm from '@/components/pages/BookForm';
import { useState, useEffect } from 'react';
import { getBooks, setBooks } from '@/components/utils/localStorage';

const DataPemasukan = () => {
  const [books, setBooksState] = useState<any[]>([]);

  useEffect(() => {
    setBooksState(getBooks());
  }, []);

  const addBook = (book: any) => {
    const newBooks = [...books, book];
    setBooks(newBooks);
    setBooksState(newBooks);
  };

  return (
    <div className="container mx-auto p-4">
      <BookForm onAdd={addBook} />
    </div>
  );
};

export default DataPemasukan;
