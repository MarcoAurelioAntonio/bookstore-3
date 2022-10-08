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

  const remBook = (event) => {
    const { id } = event.target;
    dispatch(removeBookFetch(id));
  };

  return (
    <div className="book-container flex">
      <div className="info-div flex">
        <div className="book-info">
          <p className="cat">{book.category}</p>
          <h3 className="tit">{book.title}</h3>
          <p className="aut">{book.author}</p>
        </div>
        <div className="functions flex">
          <Comments />
          <span>|</span>
          <button className="remove-btn" type="button" id={book.id} onClick={remBook}>Remove</button>
          <span>|</span>
          <Edit />
        </div>
      </div>
      <div className="completed-div flex">
        <CircularStatic value={value} />
        <div className="sub-completed-div">
          <p className="percentage">64%</p>
          <p className="comp">Completed</p>
        </div>
      </div>
      <div className="progress-div flex">
        <div className="progress-div-1">
          <p className="comp">CURRENT CHAPTER</p>
          <p>Chapter 15</p>
          <button className="update" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
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
