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
    error: "false",
  }

  getAllBooks=()=>{
    BooksAPI.getAll()
    .then((books)=> {
      console.log(books)
      this.setState({
        books
      })
    })
  }

  search=(e)=>{
    this.setState({
      error: false
    })
    const regex = /[a-zA-Z]/i
    if(e.test(regex)){
      BooksAPI.search(e)
        .then((res)=> {
          console.log("Onsearch Res",res)
          this.setState({
            searchResult: res,
          })
        })
    } else {
      this.setState({
        error: true
      })
    }
  }

  componentDidMount(){
    this.getAllBooks();
    this.search();
  }

  handleChange=(book, shelf)=>{
    BooksAPI.update(book, shelf)
      .then(() =>{
        this.getAllBooks()
      })
  }

  changeSearch=(e)=>{
    this.setState({
      search:  e
    })
  }


  render() {
    const { search, searchResult, shelf, books, error } = this.state;
    if(books.length === 0) {  // waiting for the books to fetch 
      return(
       <Loader text={`Loading  your shelf...`}/>
      )
    }
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListBooks handleChange={this.handleChange} books={books} shelf={shelf}/>
        )} />
        <Route exact path="/search" render={()=> (
          <Search
            searchResult={searchResult}
            onSearch={this.search}
            changeSearch={this.changeSearch}
            handleChange={this.handleChange}
            search={search}
            error={error} />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
