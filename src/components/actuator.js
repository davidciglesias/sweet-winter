import React from 'react';
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import purple from '@material-ui/core/colors/purple'
import meow from './meow.mp3'

const _handleClick = (label, onClick, event) => {
    event.preventDefault();
    onClick(label);
    playLow.play();
};

const themeRed = createMuiTheme({
    palette: {
      primary: red,
    },
    typography: {
      useNextVariants: true,
    },
  });
const themePurple = createMuiTheme({
    palette: {
        primary: purple,
    },
    typography: {
        useNextVariants: true,
    },
    });
    const themeYellow = createMuiTheme({
    palette: {
        primary: {
        main:"#ffcc00",
        }
    },
    typography: {
        useNextVariants: true,
    },
});

const themeGreen = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#1fa1a1',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
  
      typography: {
        useNextVariants: true,
      },
      // error: will use the default color
    },
  });

var playLow

function Actuator(props) {
    
    var theme
        
    switch(props.option) {
        case 'red':
            theme = themeRed
            break
        case 'yellow':
            theme = themeYellow
            break
        case 'purple':
            theme = themeGreen
            break
        case 'green':
            theme = themePurple
            break
        default:
            break
    }

    

    return (

        <>
            <MuiThemeProvider theme={theme}>

                <audio
                    key={meow}
                    ref={(low) => { playLow = low; }}
                    src={meow}
                />
                <Button 
                    disabled={!props.enabled}
                    onClick={(event) => _handleClick(props.label, props.onClick, event)}
                    variant="contained"
                    color="primary"
                    className={props.cssRoot}
                    fullWidth={true}
                >
                {props.label}
                </Button>
            </MuiThemeProvider>
        </> 
    )
}

export default (Actuator)