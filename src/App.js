import React, { Component } from 'react';
import './App.css';
import logo from './winter.svg';
import Actuator from "./components/actuator";
import Level from "./components/level";

class App extends Component {
  constructor(props) {
    super(props);
    this.targetClick = this.targetClick.bind(this);
  }

  targetClick(label) {
    console.log(label + " was clicked!");
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString()});
      console.log(this.state.time);
    }, 1000);
    
  }
  
  componentWillUnmount = () => {
    clearInterval(this.interval);
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is Winter the Cat!
          </p>
          <Actuator label="potato" onClick={this.targetClick}/>
          <Level level="5"/>
          <Actuator label="raf" onClick={this.targetClick}/>
          <Actuator label="nara" onClick={this.targetClick}/>
          <Actuator label="asfsa" onClick={this.targetClick}/>
        </header>
      </div>
    );
  }

  
  
  
}

export default App;
