import React from 'react';

const Book = (props) => {
  const { handleChange, books } = props;

  return (
    <section className="bookshelf-books">
    <ol className="books-grid">
      {books.map((book)=>(
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks["thumbnail"] : "" }})` }}></div>
              <div className="book-shelf-changer">
                <select value={book.shelf? book.shelf : "none" }  onChange={(e)=> handleChange(book, e.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors === undefined? "" : book.authors.join(", ") }</div>  {/* Checks if the authors name is greater than one  If it is, It seperates them with a comma */}                                                                                                  
          </div> 
        </li>
      ))}
    </ol>
  </section>
  )
}

export default Book;
