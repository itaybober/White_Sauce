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

    const [selected, setSelected] = useState(false);

    const handleNext = async ()=> {
        console.log(PAGESMISSIONS[nextMiss])
        await curGame.getRandomMissionFromDatabase(NEXT[PAGESMISSIONS[nextMiss]])
        await curGame.updateAllPlayersPages(PAGESMISSIONS[nextMiss])
        setNextMiss((nextMiss+1))
        // this checks if we are on the last page or not
        if (nextMiss === 2)
            setIsGameOver(true)
    }


    const handleToggle = async () => {
        if (!selected) {
            await curGame.incrementReady()
        } else {
            await curGame.decrementReady()
        }

        setSelected(!selected);

        let totalNumOfPlayers = 0;
        await getDoc(curGame._gameRef).then((docSnapshot) => {
            if (docSnapshot.exists()){
                // @ts-ignore
                totalNumOfPlayers = docSnapshot.data().ready
            }
        })
        if (totalNumOfPlayers === curGame._players.length){
        //     advance all
            await handleNext()
            curGame.setReady(0)
        }
    }

    // curGame.getMissionFromDatabase();
    // console.log(curGame._id)
    // console.log(curGame._curMission)

    curGame.winnerListUpdate()

    return (
        <Container className={"points_page_component"} sx={{p:2}} >
            <Avatar_and_points name={curPlayer._name} points={curPlayer._points} avatarName={curPlayer._avatar} avatarRef={curPlayer._avatarRef}/>
            <Card sx={{ width: 330, height: 370 } }>
                <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "center"}}>
                    <Typography variant="h5" color={"primary"}> <b>Who will be the next chief of the tribe?</b></Typography>
                    <WinnerList game={curGame}/>
                </CardContent>
            </Card>


            <ToggleButton
                value="check"
                selected={selected}
                onChange={handleToggle}
            >
                {selected ? "Waiting" : "Ready"}
            </ToggleButton>

        </Container>
///
    );

}

// for calling the winner list-
// <Card sx={{ width: 330, height: 370 } }>
//     <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify"}}>
//         <Typography variant="h5" color={"primary"}> <b>You better hurry people are starting to finish...</b></Typography>
//         {/*<Winner_list name1={"Achsaf"} points1={340} bg1={"#D9FB68"}*/}
//         {/*             name2={"?"} points2={0} bg2={"#78909C"}*/}
//         {/*             name3={"?"} points3={0} bg3={"#78909C"} />*/}
//     </CardContent>
// </Card>