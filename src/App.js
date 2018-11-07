import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Home from './views/Home'
import SearchBooks from './views/SearchBooks'
import './App.css'

class BooksApp extends Component {
  state = {
      query: '',
      searchBooks: [],
    /*  showingBooks: [] */
  }

/*  componentDidMount() {
    BooksAPI.getAll()
        .then((searchBooks) => {
          this.setState({
            searchBooks
          });
      });

    } */

  /* Controls wantToRead: state.wantToRead.concat([ book ]) */
searches = (query) => {
    BooksAPI.search(query).then(response => {
      this.setState({
        searchBooks: response
      });
    });
  }



  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            searchBooks={this.state.searchBooks}
            searches = {this.searches}
            query = {this.state.query}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
