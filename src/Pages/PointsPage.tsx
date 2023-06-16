import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar_and_points from "../Components/avatar_and_points";
import "./Survival_mission.css"
import Winner_list from "../Components/Winner_list";
import Container from "@mui/material/Container";
import "../Components/Flippable_card"
import {PAGES} from "./GameManager";


/**
 * in the future we'll add a game param, that will help us with setting unique display
 * for each player
 * @param jump
 * @param toPage
 * @constructor
 */
// @ts-ignore
export default function PointsPage({curPlayer,curGame}) {

    // curGame.getMissionFromDatabase();


    console.log(curGame._id)
    console.log(curGame._curMission)


    return (
        <Container className={"survival_page_component"} sx={{p:2}} >
            <Avatar_and_points name={curPlayer._name} points={curPlayer._points} />
            <Card sx={{ width: 330, height: 370 } }>
                <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "center"}}>
                    <Typography variant="h5" color={"primary"}> <b>Who will be the next chief of the tribe?</b></Typography>
                    <Winner_list game={curGame}/>
                </CardContent>
            </Card>


            <Button onClick={()=> curPlayer.setCurPage(PAGES.PUN)} variant="contained" color="primary" size={"medium"} sx={{
                mb: 4,

            }} >Next</Button>
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