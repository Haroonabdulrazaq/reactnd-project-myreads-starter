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

  search=(e)=>{
    BooksAPI.search(e)
      .then((res)=> {
        console.log("Onsearch Res",res)
        this.setState({
          searchResult: res,
        })
      })
  }

  render() {
    const { searchResult, shelf, books, search } = this.state;
    if(books.length === 0) {
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
          <Search searchResult={searchResult} onSearch={this.search} changeSearch={this.changeSearch} search={search} />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
