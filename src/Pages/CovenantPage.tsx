



import Chwazi from "../Achsaf_Folder/Chwazi";
import "./CovenantPage.css";
import {useState} from 'react';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CardContent from "@mui/material/CardContent";


// TODO determined by number of players in firebase
const NUM_OF_PLAYERS = 2;

// @ts-ignore
function CovenantPage({jump}) {

    const [numFingers, setNumFingers] = useState(0);

    function startGame(){
        // TODO get from firebase
        if (numFingers === NUM_OF_PLAYERS){
            jump(6);
        }
    }


    return(
        <div id={"CovenantPage_Background"}>
            <Card sx={{flex:"auto",  position:'relative', width: "90%", height: 160, top: "2%", alignContent: "left" }   } >
                <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify"}}>
                    <Typography variant="h5" color={"primary"}> Hello... it's me...</Typography>
                    <Typography variant="h6" >I was wondering if after all these years you'd like to meet</Typography>
                    <Typography variant="subtitle2">
                        To go over everything
                        They say that time's supposed to heal ya, but I ain't done much healing
                        Hello, can you hear me?
                        I'm in California dreaming about who we used to be
                        When we were younger and free
                        I've forgotten how it felt before the world fell at our feet
                        There's such a difference between us
                        And a million miles
                    </Typography>
                    <Typography variant="subtitle2" >Hello from the other side</Typography>
                    <Typography variant="subtitle1" ><br/> <br/> -- Adele</Typography>
                </CardContent>
            </Card>

            <div id={"CovenantPage_ChwaziContainer"} onTouchStart={startGame} onTouchEnd={startGame} onTouchMove={startGame} >
                <Chwazi setNumFingers={setNumFingers}/>
            </div>
        </div>
    )
}

export default CovenantPage;