
import { ThemeProvider, createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css'; // for roboto font
import '@fontsource/roboto/400.css'; // for roboto font
import '@fontsource/roboto/500.css'; // for roboto font
import '@fontsource/roboto/700.css'; // for roboto font
import '@mui/lab/themeAugmentation';// in order to use ts


import {ComponentsProps} from "@mui/material/styles/props";
import {ComponentsOverrides} from "@mui/material/styles/overrides";
import {ComponentsVariants} from "@mui/material/styles/variants";
import {orange, red} from "@mui/material/colors";


// example for creating new variables:
// declare module '@mui/material/styles' {
//     interface Theme {
//         status: {
//             danger: string;
//         };3
//     }
//     // allow configuration using `createTheme`
//     interface ThemeOptions {
//         status?: {
//             danger?: string;
//         };
//     }
// }
// const theme = createTheme({
//
//
//     status: {
//         danger: orange[500],
//     },


const theme = createTheme({

    // example for changing mui component
    // components: {
    //     MuiButton: {
    //         styleOverrides: {
    //             root:{
    //                 size : 2,
    //                 background :"red"
    //             },
    //         },
    //     },
    // },




    palette: {
        mode: 'light',
        primary: {
            main: '#90ece4',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ff9e80',
        },
        background: {

            default: 'rgb(30,31,34)',
            paper: '#1e1f22',
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
    typography : {
        fontSize: 14,


        h1: {
// this one is without font in order to show the default one

        },

        h2: {
            // fontFamily: "Calibre",

        },
        h3: {
            // fontFamily: "Calibre",

        },
        h4: {
            // fontFamily: "Calibre",

        },
        subtitle1: {
            // fontFamily: "Calibre",

        },
        subtitle2: {
            // fontFamily: "Calibre",

        },
        body1: {
            // fontFamily: "Calibre",

        },
        body2: {
            // fontFamily: "Calibre",

        },
        button: {
            // fontFamily: "Calibre",

        },
        caption: {
            // fontFamily: "Calibre",

        },
        overline: {
            // fontFamily: "Calibre",

        },

    },
    // mui components -
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    size: 2,
                    background: '#37464e',
                    text: 'primary'
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    background: '#37464e',
                    text: "#ececec"

                },
            },
        },

    },

});
export default theme;
