import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value)

    this.setState({ text: event.target.value })
  }

  onFormSubmit(event) {
    envent.preventDefault();
  }

  render() {
    return(
      <form onSubmit={ this.onFormSubmit }>
        <input 
          type='text' 
          placeholder='Search for weather in the you city!'
          value={ this.state.text }
          onChange={ this.onInputChange }
        />
        <input type='submit' value='search' />
      </form>
    )
  }
}

export default SearchBar;