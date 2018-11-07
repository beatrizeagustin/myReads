import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AddSearchButton extends Component {
  state = {
    showSearchPage: false
  }
  render() {
    return (
      <div className="open-search">
      <Link
            to='/search'
            className='open-search'>
            Add a Book</Link>
      </div>
    )
  }
}

export default AddSearchButton
