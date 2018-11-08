import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './views/Home'
import SearchBooks from './views/SearchBooks'
import './App.css'

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Home/>
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
