import React from 'react';
import Book from './Book';
import '../styles/Books.css';

function Books() {
  return (
    <div className="book-list">
      <Book author="Pepito" title="The lodr of los anillos" value={22} category="Action" />
      <Book author="Juanito" title="meditacions" value={50} category="Science Fiction" />
      <Book author="Ranita de Metan" title="enquiridion" value={60} category="Terror" />
      <Book author="Pinocho" title="blancanieves" value={80} category="Suspenso" />
    </div>
  );
}

export default Books;
