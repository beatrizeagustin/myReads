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
              <Home shelves={this.shelves} state={this.state} moveShelf={this.moveShelf} />
            )}/>
            <Route path='/search' render={() => (
              <SearchBooks moveShelf={this.moveShelf} />
            )}/>
          </div>
        )
      }
    }


export default BooksApp
