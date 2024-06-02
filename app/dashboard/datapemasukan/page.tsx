'use client'

import BookForm from '@/components/pages/BookForm'
import { useState } from 'react';
function DataPemasukan() {
  const [books, setBooks] = useState<any[]>([]);

  const addBook = (book: any) => {
    setBooks([...books, book]);
  };
  return (
    <BookForm onAdd={addBook}/>
  )
}

export default DataPemasukan