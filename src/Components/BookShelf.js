import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

  render() {
    const { shelfBooks } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
            <Book set={shelfBooks} />
        </div>
      </div>
    )
  }
}

export default BookShelf
