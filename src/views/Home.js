import React, { Component } from 'react'
import BookShelf from 'src/BookShelf'
import AddSearchButton from 'src/AddSearchButton'

class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

          <div>
            <BookShelf/>

        {/* <CurrentlyReading currentlyReading={this.state.currentlyReading}/>
            <WantToRead wantToRead={this.state.wantToRead}/>
            <Read read={this.state.read}/>
            */}
          </div>
        </div>
          <AddSearchButton/>
      </div>
    )
  }
}
