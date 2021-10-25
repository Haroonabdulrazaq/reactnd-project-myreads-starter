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
      if (e !== "") {
        const existingBooks = this.state.books;
        BooksAPI.search(e)
          .then((searchBooks)=> {
            if(searchBooks.length > 0){
              const newBooks = searchBooks.map((book) => {
                const theSameBook = existingBooks.find((b) => b.id === book.id)
                return theSameBook? theSameBook : book
              })
              console.log("newBooks", newBooks);
              this.setState({
                searchResult: newBooks? newBooks: [],
                fetching: false,
                customError: false,
              })
            } 
            if(e === "") {
              this.setState({
                searchResult: []
              })
            }
          })
      } else {
        this.setState({
          searchResult: []
        })
      }
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
    this.setState({
      search: e
    })
   if (e === "") {
     this.setState({
       searchResult: []
     })
   }
    // this.search(e)
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
            books={books}
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
