import React from 'react';
import styled from 'styled-components'

const FillerStyle = styled.div`
  background: #1DA598;
  height: 100%;
  border-radius: inherit;
  transition: width .2s ease-in;
`
const Filler = (props) => 
    (
        <FillerStyle style={
            { 
                width: `${props.decrease ? 100 - props.progress : props.progress}%`,
                float: `${props.right ? "right" : "left"}`
            }} />
    );

export default Filler;