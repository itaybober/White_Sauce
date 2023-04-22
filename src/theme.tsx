import { ThemeOptions } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
    // your custom styles go here
}) as typeof Button;


const theme = createTheme({

    palette: {
        mode: 'light',
        primary: {
            main: '#90ece4',
            contrastText: '#000000',
        },
        secondary: {
            main: '#ff9e80',
        },
        background: {

            default: 'rgba(150,31,122,0)',
            paper: '#a02727',
        },
        text: {
            primary: '#703737',
            secondary: '#ececec',
            disabled: '#ececec',
        },
        warning: {
            main: '#ed3202',
        },
        info: {
            main: '#0176b5',
        },
        success: {
            main: '#29832d',
        },

    },
    typography: {
        fontFamily: "Calibre",
        fontSize:14,

        h1: {
            fontFamily: "Calibre",

        },

        h2: {
            fontFamily: "Calibre",

        },
        h3: {
            fontFamily: "Calibre",

        },
        h4: {
            fontFamily: "Calibre",

        },
        subtitle1: {
            fontFamily: "Calibre",

        },
        subtitle2: {
            fontFamily: "Calibre",

        },
        body1: {
            fontFamily: "Calibre",

        },
        body2: {
            fontFamily: "Calibre",

        },
        button: {
            fontFamily: "Calibre",

        },
        caption: {
            fontFamily: "Calibre",

        },
        overline: {
            fontFamily: "Calibre",

        },

    }
})
export default theme;
