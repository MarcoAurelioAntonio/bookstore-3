import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/book';
import categoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoryReducer,
  },
});

export default store;
