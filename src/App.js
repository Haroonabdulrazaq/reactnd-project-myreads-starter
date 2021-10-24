import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import Loader from "./Loader";
import Search from "./Search";

import './App.css';

export class BooksApp extends Component {
  state= {
    books: [],
    shelf: "None",
    search: "",
    searchResult: [],
    fetching: true,
    customError: false,
  }

  getAllBooks=()=>{
    BooksAPI.getAll()
    .then((books)=> {
      console.log(books)
      this.setState({
        books,
        fetching: false,
      })
    })
  }

  search=(e)=>{
    this.setState({
      customError: false
    })
    const regex = /[a-zA-Z]/i
    if(regex.test(this.state.search)){
      console.log("Regex Passed")
      BooksAPI.search(e)
        .then((res)=> {
          this.setState({
            searchResult: res,
            fetching: false,
            customError: false,
          })
        })
    } else {
      console.log("Regex Failed")
      this.setState({
        customError: true
      })
    }
  }

  componentDidMount(){
    this.getAllBooks();
    this.search();
  }

  handleChange=(book, shelf)=>{
    book.shelf = shelf
    BooksAPI.update(book, shelf)
      .then(() =>{
        this.setState((prevState) => ({
          books: prevState.books.filter(b => b.id !== book.id).concat([ book ])
        }))
      })
  }

  handleReset=()=>{
    console.log("reseting...");
    this.setState({
      search: "",
      searchResult: []
    })
  }

  changeSearch=(e)=>{
    console.log("EEEEE",e.length);
    if(e.length <= 1) {
      console.log("Changing Search", e.length);
      this.setState({
        searchResult: []
      })
    }
    this.setState({
      search: e
    })
  }


  render() {
    const { fetching, search, shelf, books, customError, searchResult } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListBooks handleChange={this.handleChange} books={books} shelf={shelf}/>
        )} />
        {fetching && <Loader text={`Loading  your shelf...`}/>}
        <Route exact path="/search" render={()=> (
          <Search
          searchResult={searchResult}
            onSearch={this.search}
            changeSearch={this.changeSearch}
            handleChange={this.handleChange}
            search={search}
            customError={customError}
            handleReset={this.handleReset} />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
