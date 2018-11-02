import React from 'react';
import ReactSVG from 'react-svg'

const rEye = 
    <svg className="rightEye">
        <g transform="translate(100,0)">
            <circle cx="50" cy="0" r="100"/>
        </g>
    </svg>

const Cat = ({logo, name}) => (
    <div>
        <ReactSVG src={logo}></ReactSVG>
        <p>{name}</p>
    </div>
)

export default Cat