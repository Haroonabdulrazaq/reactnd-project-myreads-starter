import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from "./Loader";
import Book from "./Book";
// import Header from "./Header";
import './App.css';

class Search extends Component {
  render() {
    const {search, searchResult, onSearch, changeSearch, handleChange } = this.props;
    console.log("onSearch...", searchResult); // Logging to see when the books fetches
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={search}
              onChange={(e)=>{
                changeSearch(e.target.value) // UIpdating the form input
                onSearch(search) // Calling the search function to search books from BookAPI
              }}/>
          </div>
        </div>
        {searchResult === undefined && <div className="search-books-results">
          <Loader text={`Please enter a valid search`}/>
        </div>}
        {searchResult && <div className="search-books-results">
          <ol className="books-grid">
            <Book books={searchResult} handleChange={handleChange} /> {/*Reusing the Book component*/}
          </ol>
        </div>}
      </div>
    )
  }
}

export default Search;
