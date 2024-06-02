export const getBooks = () => {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
  };
  
  export const setBooks = (books: any[]) => {
    localStorage.setItem('books', JSON.stringify(books));
  };
  