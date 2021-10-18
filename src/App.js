import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import Search from "./Search";

import './App.css';

export class BooksApp extends Component {
  state= {
    books: [],
    shelf: "None",
    search: "",
    searchResult: [],
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

  componentDidMount(){
    this.getAllBooks()
  }

  handleChange=(book, shelf)=>{
    console.log(shelf);
    BooksAPI.update(book, shelf)
      .then(() =>{
        this.getAllBooks()
      })
  }

  search=(e)=>{
    BooksAPI.search(e.target.value)
      .then((res)=> {
        console.log(res)
        this.setState({
          searchResult: res
        })
      })
  }
  render() {
    const { searchResult, shelf, books } = this.state;
    if(books.length === 0) {
      return(
       <div className="loader-wrapper"> 
          <div className="loader"></div>
          <h2>Loading  your shelf...</h2>
        </div>
      )
    }
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListBooks handleChange={this.handleChange} books={books} shelf={shelf}/>
        )} />
        <Route exact path="/search" render={()=> (
          <Search searchResult={searchResult} onSearch={this.search} handleChange={this.handleChange}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;
