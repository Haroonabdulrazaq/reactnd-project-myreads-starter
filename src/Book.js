import React, { Component } from 'react';

class Book extends Component {
  render() {
    const { handleChange, shelf, books } = this.props;
    return (
      <section className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book)=>(
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks["thumbnail"]}})` }}></div>
                  <div className="book-shelf-changer">
                    <select value={shelf} onChange={(e)=> handleChange(book, e.target.value)}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading"></option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.length > 0? book.authors.join(", "): book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    )
  }
}

export default Book;