import React from 'react';
import '../styles/Form.css';

export default function Form() {
  return (
    <form action="" className="form-add-book">
      <input className="input-book" type="text" name="bookTitle" id="book-title" placeholder="title" required />
      <select className="select-book" name="category" id="category">
        <option value="" disabled selected>Category</option>
      </select>
      <input className="submit" type="submit" value="ADD BOOK" />
    </form>
  );
}
