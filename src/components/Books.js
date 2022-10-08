import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import '../styles/Books.css';
import { fetchBooks } from '../redux/books/book';

function Books() {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="book-list">

      { books?.map((book) => <Book key={book.id} book={book} value={64} />)}

      <div className="footer-empty" />
    </div>
  );
}

export default Books;
