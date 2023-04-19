import { ThemeOptions } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
            default: '#961f7a',
            paper: '#37474F',
        },
        text: {
            primary: '#ececec',
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
        h1: {
            fontFamily: "Calibre",
            primary: '#ececec',
            secondary: '#ececec',
            disabled: '#ececec',
        },

        h2: {
            fontFamily: "Calibre",
            primary: '#ececec',
            secondary: '#ececec',
            disabled: '#ececec',
        },
        h3: {
            fontFamily: "Calibre",
            primary: '#ececec',
            secondary: '#ececec',
            disabled: '#ececec',
        },
        h4: {
            fontFamily: "Calibre",
            primary: '#ececec',
            secondary: '#ececec',
            disabled: '#ececec',
        },
        subtitle1: {
            fontFamily: "Calibre",
            primary: '#ececec',
            secondary: '#ececec',
            disabled: '#ececec',
        },
        subtitle2: {
            fontFamily: "Calibre",
            primary: '#ececec',
            secondary: '#ececec',
            disabled: '#ececec',
        },
        body1: {
            fontFamily: "Calibre",
            primary: '#ececec',
            secondary: '#ececec',
            disabled: '#ececec',
        },
        body2: {
            fontFamily: "Calibre",
            primary: '#ececec',
            secondary: '#ececec',
            disabled: '#ececec',
        },
        button: {
            fontFamily: "Calibre",
            primary: '#ececec',
            secondary: '#ececec',
            disabled: '#ececec',
        },
        caption: {
            fontFamily: "Calibre",
            primary: '#ececec',
            secondary: '#ececec',
            disabled: '#ececec',
        },
        overline: {
            fontFamily: "Calibre",
            primary: '#ececec',
            secondary: '#ececec',
            disabled: '#ececec',
        },


    }
})
export default theme;
