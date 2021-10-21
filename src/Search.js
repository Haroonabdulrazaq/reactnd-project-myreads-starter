import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Loader from "./Loader";
import Book from "./Book";
// import Error from "./Error";
import './App.css';

class Search extends Component {
  render() {
    const {search, searchResult, onSearch, changeSearch, handleChange, customError  } = this.props; // Destructuring the props Obj
    console.log("onSearch...", searchResult); // Logging to see when the books fetches
    console.log("onSearch Error...", customError); 
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
                onSearch(e.target.value) // Calling the search function to search books from BookAPI
              }}/>
          </div>
        </div>
       { customError &&
            <div className="search-books-results">
              <p>Please enter a valid search</p> 
            </div>
        }
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
