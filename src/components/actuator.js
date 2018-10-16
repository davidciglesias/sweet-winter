import React from 'react';


const _handleClick = (label, onClick, event) => {
    event.preventDefault();
    onClick(label);
};

const Actuator = ({label, onClick}) => 
    <button onClick={(event) => _handleClick(label, onClick, event)}>{label}</button> 

export default Actuator;