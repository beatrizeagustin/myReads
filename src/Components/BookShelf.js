import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookShelf extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  /*   books: [],
     currentlyReading: [],
     wantToRead: [],
     read: [], */
     onShelf: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((onShelf) => {
        this.setState({
          onShelf
        });
    });
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
            <Book onShelf={this.state.onShelf}/>
        </div>
      </div>
    )
  }
}

export default BookShelf
