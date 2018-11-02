import React from 'react';
import ReactSVG from 'react-svg'

class ElementIcon extends React.PureComponent {
    render() {
        return (
            <>
                <ReactSVG src={this.props.icon}/>
            </>
        )
    }
}

export default ElementIcon