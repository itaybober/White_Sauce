import { createTheme } from '@mui/material/styles';

let theme=createTheme({
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
            default: '#242e3f',
            paper: '#37474F',
        },
        text: {
            primary: '#ffffff',
            secondary: '#ffffff',
            disabled: '#ffffff',
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
});