import React from 'react';
import PropTypes from 'prop-types';
import CircularStatic from './CircularProg';
import Remove from './Remove';
import Comments from './Comments';
import Edit from './Edit';
import '../styles/Book.css';

function Book({ author, title, category/* , value */ }) {
  return (
    <div className="book-container">
      <div className="info-div">
        <div className="book-info">
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
        <div className="functions">
          <Comments />
          <span>|</span>
          <Remove />
          <span>|</span>
          <Edit />
        </div>
      </div>
      <div className="completed-div"><CircularStatic /* variant="determinate" value={value} */ /></div>
      <div className="progress-div">progress</div>
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  /* value: PropTypes.number.isRequired, */
};

export default Book;
