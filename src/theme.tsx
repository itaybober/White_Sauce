
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
import {inspect} from "util";

import {text} from "stream/consumers";



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
        mode:"dark",
        primary: {
            contrastText: '#f8faf8',
            main: '#508c86',
            light: '#5b5f62',
            dark: '#344044',

        },
        secondary: {
            main: '#ff9e80',
            contrastText: '#ffffff',
            light: '#d0a397',
            dark: '#b66c53',
        },
        background: {

            default: 'rgb(30,31,34)',
            paper: '#ffffff',
        },
        text: {
            secondary: '#ffffff',
            disabled: '#ffffff',
            primary: '#ffffff',

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


        // fontFamily: 'Didact Gothic',




        h1: {
// this one is without font in order to show the default one

        },

        h2: {

            // fontFamily: "Didactic",
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
        // MuiButton: {
        //         styleOverrides: {
        //             root: {
        //                 size: 2,
        //                 background: '#37454d',
        //
        //             },
        //         },
        // },

            },


    });


export default theme;
