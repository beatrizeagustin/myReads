import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
 import SearchBooks from './SearchBooks'
/* import WantToRead from './WantToRead' */
/* import Read from './Read' */
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

     books: [],
  /*   currentlyReading: [],
     wantToRead: [],
     read: [], */
     onShelf: [],
     showSearchPage: false,
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((onShelf) => {
        this.setState({
          onShelf
        });
      /*  console.log(currentlyReading) */
    });

  }

  /* Controls */
  addBook(book) {
    BooksAPI.update(book).then(book => {
      this.setState(state => ({
        wantToRead: state.wantToRead.concat([ book ])
      }))
    })
  }


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
            books={this.state.books}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              <div>
                <BookShelf onShelf={this.state.onShelf}/>

            {/* <CurrentlyReading currentlyReading={this.state.currentlyReading}/>
                <WantToRead wantToRead={this.state.wantToRead}/>
                <Read read={this.state.read}/>
                */}
              </div>
            </div>

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
