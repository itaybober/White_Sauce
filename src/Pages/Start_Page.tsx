import "./Start_Page.css"
import Button from "@mui/material/Button";
import Background from "../Components/Background";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import logo from "./images/step-1_logo.svg";
import React from "react";
import {Game} from "../Components/Classes";
// @ts-ignore
function Start_Page({jump, toPage}) {


    function startPage(){
        const game = new Game()
        game.addGameToFirestore()
    //     TODO Need to jump to relevant page with the game Id
    //     jump(whatever)
    }
    function joinPage(){
        jump(toPage);
    }


    return(

        <div id={"StartPage_Background"}>
            {/*להוסיף קומפוננטה של לוגו*/}
            <div id={"StartPage_Logo"}>
            <img src={logo} width={103} height={85}/>
            </div>
            <div id={"StartPage_Title"}>
                <Typography variant="h4"> <b>Which Journey is Yours?</b></Typography>
            {/*<h1 id={"StartPage_Title"}>Which Journey is Yours?</h1>*/}
            </div>
            <Button variant={"outlined"} onClick={startPage} id={"StartPage_Button_Start"} >START A CREW</Button>
            <Button variant={"outlined"} onClick={joinPage} id={"StartPage_Button_Join"} >JOIN A CREW</Button>
        </div>
    )
}

export default Start_Page;