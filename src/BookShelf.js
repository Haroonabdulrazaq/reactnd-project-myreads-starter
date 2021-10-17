import React, { Component } from 'react';
import Book from "./Book";

class BookShelf extends Component {
  render() {
    const { books } = this.props;
    const categories = []
    for(let i=0; i< books.length; i++){
      if(categories.indexOf(books[i].shelf) === -1){
        categories.push(books[i].shelf)
      } 
    }
    const wantToRead = books.filter((book) => book.shelf === "wantToRead")
    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading")
    const read = books.filter((book) => book.shelf === "read")
    return (
      <div>
        {categories.map((category) => (
          <div className="bookshelf" key={category}>
            {category === "wantToRead"&&
              <>
                <h2 className="bookshelf-title">Currently Reading</h2>
                <Book books={currentlyReading} />
              </>
            }
            {category === "wantToRead" && 
              <>
                <h2 className="bookshelf-title"> Want to Read</h2>
                <Book books={wantToRead} />
              </>
            }
            {category === "wantToRead" &&
              <>
                <h2 className="bookshelf-title">Read</h2>
                <Book books={read} />
              </>
            }
          </div>
        ))}
      </div>
    )
  }
}

export default BookShelf;
