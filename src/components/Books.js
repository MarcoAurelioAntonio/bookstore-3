import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import '../styles/Books.css';

function Books() {
  const books = useSelector((state) => state.books);
  return (
    <div className="book-list">
      Note 1: Dinamicaly aded from store array
      { books?.map((book) => <Book key={book.id} title={book} author="Freidrich Nietzsche" value={book.id} category="philosophy" />)}
      Note 2: Hardcoded books
      <Book author="Pepito" title="The lodr of los anillos" value={25} category="Action" />
      <Book author="Juanito" title="meditacions" value={53} category="Science Fiction" />
      <Book author="Ranita de Metan" title="enquiridion" value={69} category="Terror" />
      <Book author="Pinocho" title="blancanieves" value={9} category="Suspenso" />
    </div>
  );
}

export default Books;
