import React, { Component } from 'react';

class Dev extends Component {

  render() {
    return (
      <React.Fragment>
      <hr />
      <div className="card">
      <p>Name: {this.props.dev.name}</p>
      <p>Username: {this.props.dev.username}</p>
      <p>Email: {this.props.dev.email}</p>
      <p>City: {this.props.dev.address.city}</p>
      <button onClick={event => this.props.handleClick(this.props.dev)}>{this.props.words}</button>
      </div>
      </React.Fragment>
    );
  }

}

export default Dev;
