'use client'

import { useState, useEffect } from 'react';
import BookForm from '@/components/pages/dashboard/BookForm';
import BookTable from '@/components/pages/dashboard/BookTable';
import UpdateBookModal from '@/components/pages/dashboard/UpdateBookModal';
import DeleteConfirmationModal from '@/components/pages/dashboard/DeleteConfirmationModal';

const BooksPage = () => {
  const [books, setBooksState] = useState<any[]>([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

  const updateBook = (index: number, book: any) => {
    const newBooks = books.map((b, i) => (i === index ? book : b));
    setBooksState(newBooks);
    saveBooksToLocalStorage(newBooks);
  };

  const handleUpdate = (index: number) => {
    setSelectedBook(books[index]);
    setSelectedIndex(index);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (index: number) => {
    setSelectedIndex(index);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedIndex !== null) {
      const newBooks = books.filter((_, i) => i !== selectedIndex);
      setBooksState(newBooks);
      saveBooksToLocalStorage(newBooks);
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Stok Gudang</h1>
      <BookForm onAdd={addBook} isOpen={false} onClose={() => {}} />
      <BookTable 
        books={books} 
        onDelete={handleDelete} 
        onUpdate={handleUpdate} 
      />
      {selectedBook && (
        <UpdateBookModal 
          isOpen={isUpdateModalOpen} 
          onClose={() => setIsUpdateModalOpen(false)} 
          onUpdate={(book) => {
            if (selectedIndex !== null) {
              updateBook(selectedIndex, book);
            }
            setIsUpdateModalOpen(false);
          }} 
          book={selectedBook} 
        />
      )}
      <DeleteConfirmationModal 
        isOpen={isDeleteModalOpen} 
        onClose={() => setIsDeleteModalOpen(false)} 
        onConfirm={confirmDelete} 
      />
    </div>
  );
};

export default BooksPage;
