import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware } from 'redux';
import categoryReducer from './categories/categories';
import booksReducer, { fetchBooks } from './books/book';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(thunk));

store.dispatch(fetchBooks);

export default store;
