



import Chwazi from "../Components/Chwazi";
import "./CovenantPage.css";
import {useState} from 'react';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import logo from "./images/step-1_logo.svg";
import Container from "@mui/material/Container";


// TODO determined by number of players in firebase
const NUM_OF_PLAYERS = 1;

// @ts-ignore
function CovenantPage({jump, toPage}) {

    const [numFingers, setNumFingers] = useState(0);

    function startGame(){
        // TODO get from firebase
        if (numFingers === NUM_OF_PLAYERS){
            jump(toPage);
        }
    }


    return(
        <Container id={"CovenantPage_Background"}>
            <div id={"CovenantPage_Logo"}>
                <img src={logo} width={103} height={85}/>
            </div>
            <Card sx={{flex:"auto",  position:'relative', width: "90%", height: 160, top: "2%", alignContent: "left" }   } >
                <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "left"}}>
                    <Typography variant="h4" color={"primary"}> The Covenant </Typography>
                    <Typography variant="h6" >Your New Ride or Die</Typography>
                    <Typography variant="h6">
                        The anticipation is palpable.<br/> You have all gathered here together in order to
                        plan your next adventure. By joining forces, you can tackle
                        any challenge that lays ahead. With excited chatter and lively banter,
                        each idea more exciting than the last, they knew they were in for an uplifting and
                        unforgettable experience.
                    </Typography>
                    <Typography variant="body1" ><br/>Press your finger to the square, but remeber...<br/> No Backsies</Typography>

                </CardContent>
            </Card>

            <div id={"CovenantPage_ChwaziContainer"} onTouchStart={startGame} onTouchEnd={startGame} onTouchMove={startGame} >
                <Chwazi setNumFingers={setNumFingers}/>
            </div>
        </Container>
    )
}

export default CovenantPage;