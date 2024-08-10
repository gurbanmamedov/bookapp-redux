
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BookForm from './components/BookForm';
import BookDetail from './components/BookDetail';
import BookList from './components/Booklist';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<BookForm />} />
        <Route path="/edit/:id" element={<BookForm />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
