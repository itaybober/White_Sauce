import React from 'react';
// import "./Itay_Testing.css"
// import Button from "@mui/material/Button";
// import Box from '@mui/material/Box';
import logo from './step-1_logo.svg'
import './Main_Page.css'
import {Auth} from "../Components/auth";


// @ts-ignore
export default function Main_Page({jump, toPage}) {


    function next(){
        jump(toPage)
    }
    return(
        <div className={"mainFrame"}>
            <div>
                <img src={logo} width={100} height={100}/>
            </div>
            <h2 className={"step1"}>step-1</h2>
            <h1 className={"journey"}>
                this is where
           <br />
                your journey begins
            </h1>
            <Auth/>
            <button onClick={next} className={"go_button"}>continue </button>
            {/*<button className={"go_button"}>Create Account </button>*/}
        </div>
    );
}

