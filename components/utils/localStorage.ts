export const getBooks = () => {
  if (typeof window !== "undefined") {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
  }
  return [];
};

export const setBooks = (books: any[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem('books', JSON.stringify(books));
  }
};