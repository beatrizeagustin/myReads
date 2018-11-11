import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './views/Home'
import SearchBooks from './views/SearchBooks'
import './App.css'
import * as BooksAPI from "./BooksAPI";

class BooksApp extends Component {
state = {
  books: []
}
// uses update function to change shelf accordingly
moveShelf = (newBook, newShelf) => {
  BooksAPI.update(newBook, newShelf).then(() => {
    newBook.shelf = newShelf
    this.setState(state => ({
      books: state.books.filter(book => book.id !== newBook.id).concat([newBook])
    }))
  })
}

componentDidMount() {
  BooksAPI.getAll()
    .then((books) => {
      this.setState({
        books: books
      });
    });
}

render() {
  return (
    <div className="app">
      <Route exact path='/' render={() => (
        <Home
          books={this.state.books}
          moveShelf={this.moveShelf} />
      )}/>
      <Route path='/search' render={() => (
        <SearchBooks
          moveShelf={this.moveShelf}
          books={this.state.books}/>
      )}/>
    </div>
    )
  }
}


export default BooksApp
