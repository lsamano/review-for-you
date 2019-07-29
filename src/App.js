import React, { Component } from 'react'
import DevsContainer from './containers/DevsContainer';
import HiredContainer from './containers/HiredContainer';
import Search from './components/Search';

class App extends Component {
  state = {
    devs: [],
    hiredDevs: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(devData => {
      this.setState({
        devs: devData
      })
    })
  }

  setSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterTheDevs = () => {
    return this.state.devs.filter(dev => {
      return dev.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || dev.username.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  hireTheDev = dev => {
    console.log(dev)
    if (this.state.hiredDevs.includes(dev)) {
      return null
    } else {
      this.setState({
        hiredDevs: [ dev, ...this.state.hiredDevs]
      })
    }
  }

  fireTheDev = firedDev => {
    console.log(firedDev)
    const filteredDevs = this.state.hiredDevs.filter(dev => dev.id !== firedDev.id)
    this.setState({
      hiredDevs: filteredDevs
    })
  }

  sortDevs = (arr) => {
    return [...arr].sort( (a, b) => {
      return a.name.localeCompare(b.name)
    })
  }

  render() {
    // console.log(this.sortDevs())
    return (
      <div>
      <HiredContainer words={'Fire This Dev'} hiredDevs={this.sortDevs(this.state.hiredDevs)} fireTheDev={this.fireTheDev}/>
      <Search setSearchTerm={this.setSearchTerm} searchTerm={this.state.searchTerm}/>
      <DevsContainer words={'Hire This Dev'} devs={this.sortDevs(this.filterTheDevs())} hireTheDev={this.hireTheDev}/>
      </div>
    );
  }

}

export default App;
