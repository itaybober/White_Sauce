import "./Start_Page.css"
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import galiLogo from "./images/gali_test_logo.png"
import React from "react";
import {PAGES} from "./GameManager";
import logo from "./step-1_logo.svg";
// @ts-ignore

function Start_Page({curPlayer, logOut}) {

    function startPage(){
        curPlayer.setCurPage(PAGES.FILTERS)
    }
    function joinPage(){
        curPlayer.setCurPage(PAGES.JOIN);
    }


    return(

        <div id={"StartPage_Background"}>
            <img src={logo} onClick={logOut} width={103} height={85}/>
            <div id={"StartPage_Title"}>
                <Typography variant="h4"> <b>Which Journey is Yours?</b></Typography>
            {/*<h1 id={"StartPage_Title"}>Which Journey is Yours?</h1>*/}
            </div>
            <Button variant={"outlined"} onClick={startPage} id={"StartPage_Button_Start"} >START A TRIBE</Button>
            <Button variant={"outlined"} onClick={joinPage} id={"StartPage_Button_Join"} >JOIN A TRIBE</Button>
        </div>
    )
}

export default Start_Page;