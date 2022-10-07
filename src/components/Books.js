import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import '../styles/Books.css';

function Books() {
  const books = useSelector((state) => state.books);
  return (
    <div className="book-list">

      { books?.map((book) => <Book key={book.id} book={book} value={17} />)}

      <div className="footer-empty" />
    </div>
  );
}

export default Books;
