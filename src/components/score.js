import React, { Component } from 'react';

class Score extends Component{

    render() {
        var value = parseInt(this.props.value)

        return (
            <div>
                <label>Score: {value}</label>      
            </div>
        )
    }
}

export default Score