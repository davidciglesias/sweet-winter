import React, { Component } from 'react';
import './App.css';
import logo from './winter.svg';
import winterFood from './winterFood.svg';
import winterPoop from './winterPoop.svg';
import winterGame from './winterGame.svg';
import winterPet from './baseline-pets-24px.svg';
import Cat from './components/cat';
import Score from './components/score'
import CatStateHandler from './components/catstateHandler';
import Grid from '@material-ui/core/Grid'

class App extends Component {
  constructor(props) {
    super(props);
    this.targetClick = this.targetClick.bind(this);
    this.scoreTick = this.scoreTick.bind(this);
    this.state = (
      { 
        seconds: 0,
        score: 0
      }
    );
  }

  scoreTick(level) {
    this.setState((state) =>{ return { score: state.score + level}})
  }

  targetClick(label) {
    console.log(label + " was clicked!");
  }

  render() {
    return (
      
        <div className="App">
          <header className="App-header">
          <Grid container spacing={0} justify="space-evenly">
              <Grid item xs={3} xl={2}>
                <CatStateHandler 
                  onTick={this.scoreTick}
                  period="1000"
                  minLevel="0"
                  maxLevel="25"
                  label="Clean the poop!"
                  minActuatorLevel="1"
                  actuatorDecreaseLevel="10"
                  actuatorDecreaseLevelCrit="30"
                  actuatorCritChance="50"
                  actuatorCooldownMs="500"
                  onClick={this.targetClick}
                  probabilityOfIncrease="10"
                  theme={'green'}
                  decrease={false}
                  right={false}
                  icon={winterPoop}
                />
              </Grid>
              <Grid item xs={3} xl={2}>
                <CatStateHandler
                  onTick={this.scoreTick} 
                  period="1000"
                  minLevel="0"
                  maxLevel="25"
                  label="Play with me!"
                  minActuatorLevel="1"
                  actuatorDecreaseLevel="10"
                  actuatorDecreaseLevelCrit="30"
                  actuatorCritChance="50"
                  actuatorCooldownMs="500"
                  onClick={this.targetClick}
                  probabilityOfIncrease="20"
                  theme={'yellow'}
                  decrease={true}
                  right={true}
                  icon={winterGame}
                />
              </Grid>
            </Grid>
            <Grid container alignContent="center" justify="center">
              <Grid item xs={12}>
                <Score value={this.state.score}/>
                <Cat logo={logo} name="Winter"/>
              </Grid>
            </Grid>
            <Grid container spacing={0} justify="space-evenly">
              <Grid item xs={3} xl={2}>
                <CatStateHandler
                  onTick={this.scoreTick} 
                  period="300"
                  minLevel="0"
                  maxLevel="25"
                  label="Feed me!"
                  minActuatorLevel="1"
                  actuatorDecreaseLevel="10"
                  actuatorDecreaseLevelCrit="30"
                  actuatorCritChance="50"
                  actuatorCooldownMs="500"
                  onClick={this.targetClick}
                  probabilityOfIncrease="30"
                  theme={'red'}
                  decrease={true}
                  right={false}
                  icon={winterFood}
                />
              </Grid>
              <Grid item xs={3} xl={2}>
                <CatStateHandler
                  onTick={this.scoreTick} 
                  period="300"
                  minLevel="0"
                  maxLevel="25"
                  label="Pet me!"
                  minActuatorLevel="1"
                  actuatorDecreaseLevel="10"
                  actuatorDecreaseLevelCrit="30"
                  actuatorCritChance="50"
                  actuatorCooldownMs="500"
                  onClick={this.targetClick}
                  probabilityOfIncrease="10"
                  theme={'purple'}
                  decrease={false}
                  right={true}
                  icon={winterPet}
                />
              </Grid>
            </Grid>
            
          </header>
        </div>
      
    );
  }
}

export default App;
