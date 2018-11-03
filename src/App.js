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
        score: 0,
        poo_level: null,
        play_level: null,
        pet_level: null,
        feed_level: null
      }
    );
  }

  componentDidMount = () => {
    fetch('http://46.6.2.213:2000/getLevelsById?id=1', {
        method: 'GET',
        headers: {
          'Accept': 'text/plain',
        }
    }).then((response) => {
      response.text().then((resultText) => {
          var result = JSON.parse(resultText)
          console.log(result)
          this.setState(
            { 
              seconds: 0,
              score: result.score,
              poo_level: result.poo_levels,
              play_level: result.play_levels,
              pet_level:result.pet_levels,
              feed_level: result.feed_levels,
            }
          );
        }
      )
    })
  }
  
  async postNewLevel() {
    await fetch('http://46.6.2.213:2000/postLevelsById', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        mode: 'no-cors',
        body: `{"id": 1,
        "poo_level": ${this.state.poo_level},
        "pet_level": ${this.state.pet_level},
        "play_level": ${this.state.play_level},
        "feed_level": ${this.state.feed_level},
        "score": ${this.state.score}}`
          
    }).then((response) => {
      console.log("success!")
    })
  }

  scoreTick(json) {
    let newState = {}
    this.postNewLevel()
    switch(json.label) {
      case 'Clean the poop!':
        newState.poo_level = json.level
        break;
      case 'Play with me!':
        newState.play_level = json.level
      break;
      case 'Feed me!':
        newState.feed_level = json.level
      break;
      case 'Pet me!':
        newState.pet_level = json.level
      break;
      default:
        break;
    }
    this.setState((state) =>{ 
      newState.score = state.score + json.score
      return newState
    })
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
                {this.state.poo_level !== null ? 
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
                  initialLevel={this.state.poo_level}
                  />
                  :
                  <div></div>
                }
              </Grid>
              <Grid item xs={3} xl={2}>
              {this.state.poo_level !== null ? 
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
                  initialLevel={this.state.play_level}
              /> 
              :
              <div></div>}
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
                {this.state.poo_level !== null ? 
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
                  initialLevel={this.state.feed_level}
                /> 
                :
                <div></div>}
              </Grid>
              <Grid item xs={3} xl={2}>
                {this.state.poo_level !== null ? 
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
                  initialLevel={this.state.pet_level}
                  /> 
                :
                <div></div>}
              </Grid>
            </Grid>
          </header>
        </div>
      
    );
  }
}

export default App;
