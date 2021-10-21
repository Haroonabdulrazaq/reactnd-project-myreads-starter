import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from "./BookShelf";
import Header from "./Header";

import './App.css';

class ListBooks extends Component {
  render() {
    const { handleChange, books, shelf } = this.props;
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <BookShelf books={books} shelf={shelf} handleChange={handleChange}/>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
