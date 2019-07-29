import React, { Component } from 'react';

class Search extends Component {
  // state = {
  //   searchTerm: ""
  // }

  // This works, but we'll do the other way too
  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   }, () => this.props.filterTheDevs(this.state.searchTerm))
  // }

  // handleChange = event => {
  //   this.props.setSearchTerm(event.target.value)
  // }

  render() {
    console.log(this.props);
    return (
      <input
      type='text'
      name='searchTerm'
      value={this.props.searchTerm}
      onChange={this.props.setSearchTerm}
      />
    );
  }

}

export default Search;
