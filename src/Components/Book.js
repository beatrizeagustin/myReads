import React, { Component } from 'react'

class Book extends Component {
state = {
  toShelf: this.props.set.shelf
}

changeShelf = (book, event) => {
     this.props.moveShelf(this.props.set, event.target.value);
      this.setState({
          toShelf: event.target.value
   });
   console.log(book)
 }

render() {
    return (
      <ol className="books-grid">
        {this.props.set.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
                  <div className="book-shelf-changer">
                    <select
                      value={this.state.toShelf}
                      onChange={(e) => this.changeShelf(book, e)}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
    )
  }
}

export default Book
