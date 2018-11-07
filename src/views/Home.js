import React, { Component } from 'react'
import BookShelf from '../Components/BookShelf'
import AddSearchButton from '../Components/AddSearchButton'
import * as BooksAPI from '../BooksAPI'

class Home extends Component {
  constructor(props){
	   super(props);
	    this.shelves = [
			     {title: 'Currently Reading', shelf: 'currentlyReading'},
			     {title: 'Want to Read', shelf: 'wantToRead'},
			     {title: 'Read', shelf: 'read'}
		]
}

state = {
  books: []
}

componentDidMount() {
  BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books
        });
        console.log(books)
    });
  }

getBooks(name){
	return this.state.books.filter((book) => book.shelf === name)
}
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            {this.props.shelves.map((bookshelf) => (
						  <div key={bookshelf.id}>
				 				<BookShelf
                  title={bookshelf.title}
							    shelfBooks={this.getBooks(bookshelf.shelf)}
								/>
							</div>
						))}
          {/*  <BookShelf title="{Currently Reading}"/>
            <BookShelf title="Want to Read"/>
            <BookShelf title="Read"/> */}

        {/* <CurrentlyReading currentlyReading={this.state.currentlyReading}/>
            <WantToRead wantToRead={this.state.wantToRead}/>
            <Read read={this.state.read}/>
            */}

        </div>
          <AddSearchButton/>
      </div>
    )
  }
}

export default Home
