import React, { Component } from 'react'
import BookShelf from '../Components/BookShelf'
import AddSearchButton from '../Components/AddSearchButton'
import * as BooksAPI from '../BooksAPI'

class Home extends Component {
  state= {
    books: []
  }
   constructor(props){
        super(props);

        this.shelves = [
            {title: 'Currently Reading', shelf: 'currentlyReading'},
            {title: 'Want to Read', shelf: 'wantToRead'},
            {title: 'Read', shelf: 'read'}
        ]
    }

    getBooks(name){
       return this.state.books.filter((book) => book.shelf === name)
      /* return this.props.showingBooks.filter((book) => book.shelf === name) */
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
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            {this.shelves.map((bookshelf, i) => (
              <div key={i}>
                    <BookShelf
                      title={bookshelf.title}
                      shelfBooks={this.getBooks(bookshelf.shelf)}
                      moveShelf={this.props.moveShelf} />
                </div>
			))}
        </div>
          <AddSearchButton/>
      </div>
    )
  }
}

export default Home
