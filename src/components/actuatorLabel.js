import React from 'react'

const handleMessage = (text) => {
    
    return <div>-{text}</div>
}

const ActuatorLabel = ({text}) => {
    return handleMessage(text)
}

export default ActuatorLabel