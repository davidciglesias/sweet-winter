import React from 'react';
import Filler from './filler'
import styled from 'styled-components'


const ProgressBar = styled.div`
    position: relative;
    background-color: white;
    height: 20px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, .25);
`

const LevelBar = (props) => {


    return (
        <ProgressBar>
            <Filler 
                progress={props.progress}
                decrease={props.decrease}
                right={props.right}
            />
        </ProgressBar>
    )
}

export default LevelBar