import React from 'react';
import galiLogo from './images/gali_test_logo.png'
import './Main_Page.css'
import {Auth} from "../Components/auth";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "./step-1_logo.svg";
import background from "../Pages/images/background/long_background.svg"

// @ts-ignore
export default function Main_Page() {


     return(
        <Container className={"mainFrame"}>
            <img src={logo} className={"logo"}/>
            <Typography variant="h3" ><b>step-1</b></Typography>
            <Typography className={"text"} variant="h4">
                This is where
           <br />
                your journey begins
            </Typography>
            <Auth/>

        </Container>
    );
}



