import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookFetch } from '../redux/books/book';
import '../styles/Form.css';

export default function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const authorChange = (event) => {
    setAuthor(event.target.value);
  };

  const categoryChange = (event) => {
    setCategory(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    setTitle('');
    setCategory('');
    setAuthor('');
    dispatch(addBookFetch(newBook));
  };

  return (
    <div className="new-book-div">
      <h2 className="add-title">Add a new book!</h2>
      <form onSubmit={submit} className="form">
        <input onChange={titleChange} type="text" name="title" id="input-book-title" placeholder="Title of the book" required value={title} />
        <input onChange={authorChange} type="text" name="author" id="input-book-author" placeholder="Author of the book" required value={author} />
        <input onChange={categoryChange} type="text" name="category" id="input-book-category" placeholder="Category" required value={category} />

        <input className="submit" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
}
