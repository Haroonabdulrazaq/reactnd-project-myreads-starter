import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from "./BookShelf";

import './App.css';

class ListBooks extends Component {
  render() {
    const {categories, books} = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {categories.map((category)=> (
            <div key={category}>
              <BookShelf category={category} books={books}/>
            </div>
          ))}      
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
