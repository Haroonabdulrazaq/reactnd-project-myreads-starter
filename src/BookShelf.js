import React, { Component } from 'react';
import Book from "./Book";

class BookShelf extends Component {
  render() {
    const {category, books} = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{category}</h2>
            {<Book books={books}/>}
        </div>
      </div>
    )
  }
}

export default BookShelf;
