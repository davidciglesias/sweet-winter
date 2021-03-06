import React, {Component} from 'react'
import Actuator from './actuator';
import LevelBar from './levelBar';
import ElementIcon from './elementIcon';

class CatStateHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label: props.label,
            currentLevel: props.initialLevel,
            message: "",
        }
        this.targetClick = this.targetClick.bind(this)
    }    

    interval;

    reduceLevel() {
        var nextLevel = this.state.currentLevel - this.props.actuatorDecreaseLevel
        if(nextLevel < this.props.minLevel) nextLevel = parseInt(this.props.minLevel)
        this.setState(
            {
                currentLevel: nextLevel,
                message: "-" + this.props.actuatorDecreaseLevel
            }
        )
    }

    targetClick() {
        this.restartInterval()
        this.reduceLevel()
    }

    calculateScoreBasedOnLevel(level) {
        return {
            score: (this.props.maxLevel - level) / this.props.maxLevel,
            level: this.state.currentLevel,
            label: this.props.label
        }
    }
    
    tick() {
        var nextLevel = parseInt(this.state.currentLevel)
        if(this.state.currentLevel < this.props.maxLevel && Math.random() <= this.props.probabilityOfIncrease/100){
            this.setState(
                (prevState) => { 
                    nextLevel = parseInt(prevState.currentLevel) + 1
                    return {currentLevel: nextLevel }
                }
            )
        }
        this.props.onTick(this.calculateScoreBasedOnLevel(nextLevel))
    }

    restartInterval = () => {
        clearInterval(this.interval)
        this.interval = setInterval(() => {
            this.tick()
        }, this.props.period);
      }

    componentDidMount = () => {
        this.setState({
            currentLevel: this.props.initialLevel
        })
        setTimeout(this.restartInterval(), Math.random() * 500)
    }

    componentWillUnmount = () => {
      clearInterval(this.interval)
    }
    

    isTheActuatorEnabled = () => {
        return this.state.currentLevel >= this.props.minActuatorLevel
    }

    render() {
       
        const isActuatorEnabled = this.isTheActuatorEnabled()

        return (
            <>
                <ElementIcon icon={this.props.icon}/>
                <LevelBar
                    decrease={this.props.decrease} 
                    progress={this.state.currentLevel/this.props.maxLevel*100}
                    color={this.props.color} 
                    right={this.props.right}   
                    />
                <Actuator 
                    label={this.props.label} 
                    enabled={isActuatorEnabled} 
                    onClick={this.targetClick}
                    color={this.props.color}
                    option={this.props.theme}
                />
            </>
        )
    }

}

export default CatStateHandler