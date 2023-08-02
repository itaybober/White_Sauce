import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Countdown_Component from "../Components/Countdown_Component";
import * as React from "react";
import sockhands from './Souvenirs/sockhands.jpg'
import {useState} from "react";
import Background_loser from "../Components/Background-loser";
import "./Punishment_Page.css"
import Avatar_and_points from "../Components/avatar_and_points";
import Flippable_card from "../Components/Flippable_card";
import {PAGES} from "./GameManager";
import CameraComponent from "../Components/CameraComponent";
import turtle from '../Pages/images/cards icons/card12.png';
import Timer_Component from "../Components/Timer_Component";

// @ts-ignore
export default function Punishment({curPlayer,curGame}) {
    const loser_player = "Guy";
    const mission_object = curGame._curMission
    const [isPictureUploaded, setIsPictureUploaded] = useState(false);
    const [missionTime, setMissionTime] = useState(0);

    const handlePictureUpload = ()=> {
            setIsPictureUploaded(true);
        }
    const handleTimerStopped = (stopTime: number | null, timeElapsed: number) => {
        const missionDurationInSeconds = (stopTime !== null ? stopTime : timeElapsed);
        setMissionTime(missionDurationInSeconds);
        if (missionTime > 0) {
            curGame.addPointsSinglePlayer(curPlayer, missionTime);
        }
    }
    function forTheDemo(){
        // @ts-ignore
        setItemData([sockhands]);
    }

    // @ts-ignore
    // @ts-ignore
    return (
        // <Background_loser>
            <Container className={"punishment_page_component"} sx={{p:2}}>
                <Avatar_and_points name={curPlayer._name} points={curPlayer._points}/>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Flippable_card back_content={
                    <div>

                        <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify"}}>
                            <Typography variant="h5" color={"primary"}> <b> {mission_object._title}</b></Typography>
                            <Typography  sx={{lineHeight: '20px'}} variant={"h6"} >
                                <br/>You lost, sucks to suck. <br/><br/>
                                {mission_object._description}
                            </Typography>
                            <Typography>

                            </Typography>
                        </CardContent>
                    </div>
                    }

                    front_content={
                    <div>
                        <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "center", alignItems: "center" ,textAlign: "center" }}>
                            <img src={turtle} style={{ width: 200, height: 200, opacity: 0.7 }}/>
                            <br/>
                            <Typography variant={"h4"}> <b>turtle mission</b></Typography>
                            <Typography variant={"h5"}> {mission_object._title}</Typography>
                        </CardContent>
                    </div>
                    }
                    />


                {/*<div style={{ height: 20 }}></div>*/}

                <Timer_Component isPictureUploaded={isPictureUploaded} onTimerStopped={handleTimerStopped}/>

                {/*<div style={{ height: 20 }}></div>*/}

                <Typography variant={"h5"}> <br></br>Loser - take a Loser photo </Typography>


                <CameraComponent buttonText="Take a disgraceful Picture" onPictureUpload={handlePictureUpload} curGameNum={curGame._id}/>


                <Button onClick={async ()=> {
                    await curGame.getRandomMissionFromDatabase("Group")
                    await curPlayer.setCurPage(PAGES.POINTS)
                }} variant="contained" color="primary" size={"medium"} sx={{
                    mb: 4,

                }} >Next</Button>
            </Container>
        // </Background_loser>
    )
}