import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar_and_points from "../Components/avatar_and_points";
import "./PointsPage.css"
import WinnerList from "../Components/WinnerList";
import Container from "@mui/material/Container";
import "../Components/Flippable_card"
import {PAGES, PAGESMISSIONS} from "./GameManager";
import ToggleButton from "@mui/material/ToggleButton";
import {useState} from "react";
import {getDoc, onSnapshot} from "firebase/firestore";
import ToggleReady from "../Components/ToggleReady";



const NEXT: {[key:number]: string} ={
    6 : "Group",
    7 : "Survival"
}



/**
 * in the future we'll add a game param, that will help us with setting unique display
 * for each player
 * @param jump
 * @param toPage
 * @constructor
 */
// @ts-ignore
export default function PointsPage({curPlayer,curGame,nextMiss, setNextMiss, setIsGameOver}) {
    curGame.winnerListUpdate()

    const [selected, setSelected] = useState(false);

    const handleNext = async ()=> {
        await curGame.getRandomMissionFromDatabase(NEXT[PAGESMISSIONS[nextMiss]])
        await curGame.updateAllPlayersPages(PAGESMISSIONS[nextMiss])
        setNextMiss(nextMiss+1)
        // this checks if we are on the last page or not
        if (nextMiss === PAGESMISSIONS.length - 1)
            setIsGameOver(true)
    }




    return (
        <Container className={"points_page_component"} sx={{p:2}} >
            <Avatar_and_points name={curPlayer._name} points={curPlayer._points} avatarName={curPlayer._avatar} avatarRef={curPlayer._avatarRef}/>
            <Card sx={{ width: 330, minHeight: 370 } }>
                <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "center"}}>
                    <Typography variant="h5" color={"primary"}> <b>Who will be the next chief of the tribe?</b></Typography>
                    <WinnerList game={curGame}/>
                </CardContent>
            </Card>


            <ToggleReady curGame={curGame} handleNext={handleNext}/>
        </Container>
    );

}

