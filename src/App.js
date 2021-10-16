import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI';
import BookShelf from "./BookShelf";
import './App.css';

export class BooksApp extends Component {
  state= {
    categories: ["Currently Reading", "Want to Read", "Read"],
    books: [
      {
      imageUrl: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
      category: ["Move To...","Currently Reading","Want To Read","Read","None"],
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
      {
      imageUrl: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
      category: ["Move To...","Currently Reading","Want To Read","Read","None"],
      title: "Yet another title",
      author: "Harper Lee",
    },
      {
      imageUrl: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
      category: ["Move To...","Currently Reading","Want To Read","Read","None"],
      title: "Another title",
      author: "Harper Lee",
      }
    ],
  }
  render() {
    const {categories, books} = this.state;
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {categories.map((category)=> (
              <div key={category}>
                <BookShelf category={category} categories={categories} books={books}/>
              </div>
            ))}      
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp;;
