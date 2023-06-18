import React from 'react';
import galiLogo from './images/gali_test_logo.png'
import './Main_Page.css'
import {Auth} from "../Components/auth";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import background from "../Pages/images/background/long_background.svg"

// @ts-ignore
export default function Main_Page() {


    return(


        <Container className={ "mainFrame"}>

            <Typography variant="h3" ><b>step-1</b></Typography>
            <Typography variant="h5">
                this is where
           <br />
                your journey begins
            </Typography>
            <Auth/>

        </Container>
    );
}

