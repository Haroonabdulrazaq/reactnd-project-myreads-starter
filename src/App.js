import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI';
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import Search from "./Search";

import './App.css';

export class BooksApp extends Component {
  state= {
    categories: ["Currently Reading", "Want to Read", "Read"],
    books: [
        {
        imageUrl: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        category: "Currently Reading",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
      },
        {
        imageUrl: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
        category: "Want To Read",
        title: "Ender's Game",
        author: "Orson Scott Card",
      },
        {
        imageUrl: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        category: "Want To Read",
        title: "1776",
        author: "David McCullough",
      },
      {
        imageUrl: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
        category: "Read",
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
      }
    ],
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
