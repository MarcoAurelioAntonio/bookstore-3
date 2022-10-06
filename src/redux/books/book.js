// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Action creators
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });

// Reducer
const initialState = ['Beyond Good and Evil', 'The Will to Power', 'Twilight of the Idols/The Anti-Christ', 'The Genealogy of Morals'];
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default: return state;
  }
}
