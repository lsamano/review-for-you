import React, { Component } from 'react';
import Dev from '../components/Dev';

class HiredContainer extends Component {

  render() {
    const formattedDevs = this.props.hiredDevs.map(dev => {
      return <Dev key={dev.id} words={this.props.words} dev={dev} handleClick={this.props.fireTheDev}/>
    })
    return (
      <div>
      <h1>Hello from HiredContainer</h1>
      {formattedDevs}
      </div>
    );
  }

}

export default HiredContainer;
