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
            default: '#4e7cc9',
            paper: '#37474F',
        },
        text: {
            primary: '#37474F',
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
})
export default theme;
