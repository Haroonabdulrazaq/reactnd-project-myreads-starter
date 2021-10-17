import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import Search from "./Search";

import './App.css';

export class BooksApp extends Component {
  state= {
    books: [],
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books)=> {
        console.log(books)
        this.setState({
          books
        })
      })
  }


  render() {
    const {categories, books} = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListBooks categories={categories} books={books}/>
        )} />
        <Route exact path="/search" component={Search}/>
      </div>
    )
  }
}

export default BooksApp;
