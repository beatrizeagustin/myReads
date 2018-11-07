import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Home from './views/Home'
import SearchBooks from './views/SearchBooks'
import './App.css'

class BooksApp extends Component {
  state = {
      query: '',
      books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
        .then((books) => {
          this.setState({
            books
          });
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
        <Route exact path='/' render={() => (
          <Home/>
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
