import React, { Component } from 'react';
import './App.css';
import logo from './winter.svg';
import Actuator from "./components/actuator";
import Level from "./components/level";
import Cat from './components/cat';

class App extends Component {
  constructor(props) {
    super(props);
    this.targetClick = this.targetClick.bind(this);
    this.state = ({ seconds: 0 });
  }

  targetClick(label) {
    console.log(label + " was clicked!");
    this.restartInterval();
    this.setState((prevState) => {return {seconds: prevState.seconds >= 5 ? prevState.seconds - 5 : 0}})
  }

  interval;

  restartInterval = () => {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState(
        (prevState) => { return {seconds: prevState.seconds > 4 ? 5 : prevState.seconds + 1 }}
      );
      console.log(this.state.seconds);
    }, 300);
  }

  componentDidMount = () => {
    this.restartInterval();
  }
  
  componentWillUnmount = () => {
    clearInterval(this.interval);
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Cat logo={logo}/>
          <Actuator label="potato" onClick={this.targetClick}/>
          <Level level={this.state.seconds} max="5"/>
          <Actuator label="raf" onClick={this.targetClick}/>
          <Actuator label="nara" onClick={this.targetClick}/>
          <Actuator label="asfsa" onClick={this.targetClick}/>
        </header>
      </div>
    );
  }

  
  
  
}

export default App;
