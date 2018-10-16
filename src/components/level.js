import React from 'react';

const Level = ({level, max}) => 
    (
        <div>
            {level > parseInt(max) ? max : level }
        </div>
    );

export default Level;