import { createAsyncThunk } from '@reduxjs/toolkit';

// URL API
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const URLid = '/apps/tdUGvbgxfHyC017dl4Kz/books';
const BASE_URL = `${URL}${URLid}`;

// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOK = 'FETCH_BOOK';

// Action creators
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });

// Reducer
const initialState = [];
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default: return state;
  }
}

// API FETCH
export const fetchBooks = createAsyncThunk(FETCH_BOOK, async () => {
  await fetch(BASE_URL)
    .then((res) => res.json())
    .then((books) => {
      const bookList = [];
      Object.keys(books).forEach((key) => {
        bookList.push({
          item_id: key,
          author: books[key][0].author,
          title: books[key][0].title,
          category: books[key][0].category,
        });
      });
    });
});

// Add book in API
export const addBookFetch = ({ id, title, category }) => async (dispatch) => {
  const newBook = {
    item_id: id,
    title,
    category,
  };
  await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook({ id, title, category }));
};
