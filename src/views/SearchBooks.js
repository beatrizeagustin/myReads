import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/* import PropTypes from 'prop-types' */
import escapeRegExp from 'escape-string-regexp'
/* import sortBy from 'sort-by' */
import Book from '../Components/Book'
import * as BooksAPI from "../BooksAPI";

class SearchBooks extends Component {

  state = {
    showingBooks: [],
    searchBooks: [],
    query: ''
  };

  searches = (query) => {
    BooksAPI.search(query)
      .then(books => {
        // error handle when no books found
        if (!books.error && books.length > 0) {
          this.setState({
            searchBooks: books
          });
          // set searched books shelf with none
          let matchedBooks = books.map(book => {
            book.shelf = "none";
            // interates through book state and places shelf state
            this.props.books.forEach(stateBook => {
              if (book.id === stateBook.id) {
                book.shelf = stateBook.shelf;
              }
            });
            return book;
          });
          // sets matchedBooks into searchBooks
          this.setState({
            searchBooks: matchedBooks
          })
        }
      })
      .catch((error) => {
        if (error.status === 403) {

        }
      })
    };

  updateQuery = (query) => {
      this.setState({ query: query})
  }
 /*
  clearQuery = () => {
    this.setState({ query: ''})
  }
 */
  render() {
    const { query } = this.state
    // filter books when user search
    if (query !== '') {
      const match = new RegExp(escapeRegExp(query), 'i')
      // !! rewrite for proper setState
      this.state.showingBooks = this.state.searchBooks.filter((book) => match.test([book.title, book.authors]))
    } else {
      this.state.showingBooks = this.state.searchBooks

    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
        {/* route back to home page */}
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
              this.updateQuery(event.target.value)
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => {
                this.searches(event.target.value)
                this.updateQuery(event.target.value)
             }}
               />

          </div>
        </div>
        <div className="search-books-results">
          {/* Use Book Component */}
          <Book
            moveShelf={this.props.moveShelf}
            set={this.state.showingBooks} />
        </div>
      </div>
    )
  }
}

export default SearchBooks
