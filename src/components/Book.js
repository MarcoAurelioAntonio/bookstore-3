import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFetch } from '../redux/books/book';
import CircularStatic from './CircularProg';
import Comments from './Comments';
import Edit from './Edit';
import '../styles/Book.css';

function Book({ book, value }) {
  const dispatch = useDispatch();

  const remBook = (e) => {
    const { id } = e.target;
    dispatch(removeBookFetch(id));
  };

  return (
    <div className="book-container">
      <div className="info-div">
        <div className="book-info">
          <p>{book.category}</p>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
        <div className="functions">
          <Comments />
          <span>|</span>
          <button type="button" id={book.id} onClick={remBook}>Remove</button>
          <span>|</span>
          <Edit />
        </div>
      </div>
      <div className="completed-div"><CircularStatic value={value} /></div>
      <div className="progress-div">progress</div>
    </div>
  );
}

Book.propTypes = {
  value: PropTypes.number.isRequired,

  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
