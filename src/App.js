import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Category from './components/Category';
import Food from './components/Food';
import Drink from './components/Drink';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <nav className="app-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/category/*">Category</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/*" element={<Category />} >
          <Route path="food" element={<Food />} />
          <Route path="drink" element={<Drink />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
