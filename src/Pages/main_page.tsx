import React from 'react';
import "./Itay_Testing.css"
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import logo from './step-1_logo.svg'


function main_page() {
    return(
        <div>
            <div>
                <img src={logo} width={278} height={255.5}/>
            </div>
            <h2>step-1</h2>
            <h1 >
                this is where
            </h1>
            <h1>
                your journey begins
            </h1>
            <Button variant="contained">Sing in </Button>
            <p></p>
            <Button variant="contained">Create Account </Button>
        </div>
    );
}

export default main_page;
