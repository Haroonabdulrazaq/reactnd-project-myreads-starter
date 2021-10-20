import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Loader from "./Loader";
import Book from "./Book"
import './App.css';

class Search extends Component {
  render() {
    const { search, searchResult, onSearch } = this.props;
    console.log("Books in Search", searchResult);
    console.log("Search String", search);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={search} onChange={onSearch}/>
          </div>
        </div>
        {searchResult && <div className="search-books-results">
          <ol className="books-grid">
            <Book books={searchResult}/>
          </ol>
        </div>}
      </div>
    )
  }
}

export default Search;

// onSearch={search}