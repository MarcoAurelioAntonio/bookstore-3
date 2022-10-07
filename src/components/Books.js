import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import '../styles/Books.css';

function Books() {
  const books = useSelector((state) => state.books);
  return (
    <div className="book-list">

      { books?.map((book) => <Book key={book.id} book={book} value={17} />)}

      {/* <Book author="Pepito" title="The lodr of los anillos" value={25} category="Action" />
      <Book author="Juanito" title="meditacions" value={53} category="Science Fiction" />
      <Book author="Ranita de Metan" title="enquiridion" value={69} category="Terror" /> */}
      {/* <Book author="Pinocho" title="blancanieves" value={9} category="Suspenso" /> */}
      <div className="footer-empty" />
    </div>
  );
}

export default Books;
