import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from "./Book"
import './App.css';

class Search extends Component {
  // componentDidMount(){

  // }
  render() {
    const { searchResult, search, onSearch } = this.props;
    console.log("Books in Search", searchResult)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={search} onChange={onSearch}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
             <Book books={searchResult} onSearch={this.search} />
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
