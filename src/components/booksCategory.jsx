import React from 'react';
import { Link } from 'react-router-dom';

import generalBooksImage from "../assets/images/general-books.jpeg";
import "../css/booksCategory.css";

 const BooksCategory = () => {
  return (
    <div>
      <h1>Shop by Category</h1>
      <div className='general-books-wrapper'>
        <Link to="/general-books" className='general-books-img'>
            <img src={generalBooksImage} alt="General books image"/>
            <h3>General Books</h3>
        </Link>
      </div>
    </div>
  );
};


export default BooksCategory;