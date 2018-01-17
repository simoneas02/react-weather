import React, { Component } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text : ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit  = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ text : event.target.value })
  }
  
  onFormSubmit(event) {

    event.preventDefault();
    
    this.props.fetchWeather(this.state.text)
    
    this.setState({ text : '' })
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

function  mapDispatchToPropos(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToPropos)(SearchBar);