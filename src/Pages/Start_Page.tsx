import "./Start_Page.css"
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import galiLogo from "./images/gali_test_logo.png"
import React from "react";
import {PAGES} from "./GameManager";
// @ts-ignore

function Start_Page({curPlayer}) {

    function startPage(){
        curPlayer.setCurPage(PAGES.FILTERS)
    }
    function joinPage(){
        curPlayer.setCurPage(PAGES.JOIN);
    }


    return(

        <div id={"StartPage_Background"}>

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