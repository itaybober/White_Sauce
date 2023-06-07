import React from 'react';
// import "./Itay_Testing.css"
// import Button from "@mui/material/Button";
// import Box from '@mui/material/Box';
import logo from './step-1_logo.svg'
import galiLogo from './images/gali_test_logo.png'
import './Main_Page.css'
import {Auth} from "../Components/auth";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// @ts-ignore
export default function Main_Page() {


    return(
        <Container sx={{display: "flex", flexFlow:"column", justifyContent: "center", alignItems: "center" ,textAlign: "center",gap:3, padding: 3.5}}>
            <div>
                <img className='logo react' alt='logo' src={galiLogo} width={100} height={100}/>
            </div>

            <Typography variant="h3" >step-1</Typography>
            <Typography variant="h5">
                this is where
           <br />
                your journey begins
            </Typography>
            <br />
            <Auth/>

        </Container>
    );
}

