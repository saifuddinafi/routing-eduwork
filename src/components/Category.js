import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css'; 

const Category = () => {
  return (
    <div className="category-container">
      <h2>Kategori</h2>
      <nav className="category-nav">
        <ul>
          <li><Link to="food">Makanan</Link></li>
          <li><Link to="drink">Minuman</Link></li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Category;
