import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Form />
    </Router>
  );
}

export default App;
