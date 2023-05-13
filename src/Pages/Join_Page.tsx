import Button from "@mui/material/Button";
import "./Join_Page.css"
import {TextField, Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import Background from "../Components/Background";
import logo from "./images/step-1_logo.svg";
import React from "react";

// @ts-ignore
function Join_Page( {jump, toPage} ) {

    // @ts-ignore
    function enterValue(ev) {
        if (ev.key === "Enter"){

            // TODO work based on firebase
            jump(toPage);
            ev.preventDefault();
        }
    }

    return (

        <div id={"JoinPage_Background"}>
            <div id={"JoinPage_Logo"}>
                <img src={logo} width={103} height={85}/>
            </div>
            <Typography variant={"h4"} id={"JoinPage_Title"}><b>Enter Cypher</b></Typography>
            <div id={"JoinPage_Input"}>
            <TextField  onKeyDown={enterValue} inputProps={{min: 0, style: { textAlign: 'center' }}}
               placeholder={"PIN"} sx={{ textAlign: 'center', position:'relative', top:'50%' }}  variant="outlined" />
            </div>
            </div>
    )
}

export default Join_Page