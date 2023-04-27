import React from 'react';
// import "./Itay_Testing.css"
// import Button from "@mui/material/Button";
// import Box from '@mui/material/Box';
import logo from './step-1_logo.svg'
import './main_page.css'



function Mainpage() {
    return(
        <div className={"mainFrame"}>
            <div>
                <img src={logo} width={278} height={255.5}/>
            </div>
            <h2 className={"step1"}>step-1</h2>
            <h1 className={"journey"}>
                this is where
           <br />
                your journey begins
            </h1>
            <button className={"sign_in"}>Sing in </button>
            <p></p>
            <button className={"create_account"}>Create Account </button>
        </div>
    );
}

export default Mainpage;
