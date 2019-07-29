import React, { Component } from 'react';
import Dev from '../components/Dev';
import '../stylesheets/master.scss'

class DevsContainer extends Component {

  render() {
    const formattedCards = this.props.devs.map(dev => {
      return <Dev words={this.props.words} key={dev.id} dev={dev} handleClick={this.props.hireTheDev}/>
    })

    return (
      <div className="card-container">
      <h1>Hello from Devs Container.</h1>
      { formattedCards }
      </div>
    );
  }

}

export default DevsContainer;
