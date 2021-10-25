import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Loader from "./Loader";
import Book from "./Book";
import Error from "./Error";
import './App.css';

class Search extends Component {
  render() {
    const {search, books, onSearch, changeSearch, handleChange, handleReset, searchResult } = this.props; // Destructuring the props Obj
    console.log("onSearch...", books); // Logging to see when the books fetches
    // console.log("SearchResult...", searchResult);
    // const bookSearch = books.filter(book => book.shelf === undefined ) 
    // console.log("Book Search", bookSearch);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={handleReset}>Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={search}
              onChange={(e)=>{
                changeSearch(e.target.value) // Updating the form input
                onSearch(e.target.value) // Calling the search function to search books from BookAPI
              }}/>
          </div>
        </div>
        {
          books.error? (
            <div className="search-books-results">
              <Error text={`There is no book matching your search`} />
            </div>
          ) : (
            <div className="search-books-results">
              <ol className="books-grid">
                <Book books={searchResult} handleChange={handleChange} /> {/*Reusing the Book component*/}
              </ol>
            </div>
          )
        }
      </div>
    )
  }
}

export default Search;
