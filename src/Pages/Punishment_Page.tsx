import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Countdown_Component from "../Components/Countdown_Component";
import * as React from "react";
import sockhands from './Souvenirs/sockhands.jpg'
import {useEffect, useState} from "react";
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
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [showClock, setShowClock] = useState(true);

    useEffect(() => {
        let clockInterval: NodeJS.Timeout;
        clockInterval = setInterval(() => {
            setTimeElapsed((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(clockInterval);
    }, []);

    const handlePictureUpload = ()=> {
        setIsPictureUploaded(true);
        const missionDurationInSeconds = timeElapsed - 10;
        console.log("sec:" ,missionDurationInSeconds);
        setShowClock(false);
        if (missionDurationInSeconds > 0) {
            curGame.addPointsSinglePlayer(curPlayer, curGame, missionDurationInSeconds, "Punishment");
        //
        }
    }

    const moveToNextPage = async () => {
        await curGame.getRandomMissionFromDatabase("Group");
        await curPlayer.setCurPage(PAGES.POINTS);
    }

    // @ts-ignore
    // @ts-ignore
    return (
        // <Background_loser>
            <Container className={"punishment_page_component"} sx={{p:2}}>
                <Avatar_and_points name={curPlayer._name} points={curPlayer._points} avatarName={curPlayer._avatar} avatarRef={curPlayer._avatarRef}/>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Flippable_card back_content={
                    <div>

                        <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "center", alignItems: "center" ,textAlign: "center"}}>
                            <Typography variant="h5" color={"primary"}> <b> {mission_object._title}</b></Typography>
                            <Typography  variant={"h6"} ><br/>
                                <b>You lost, sucks to suck. </b><br/>
                                {mission_object._description}
                            </Typography>
                        </CardContent>
                    </div>
                    }
                    {/**/}
                    front_content={
                    <div>
                        <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "center", alignItems: "center" ,textAlign: "center" }}>
                            <img src={turtle} style={{ width: 200, height: 200, opacity: 0.7 }}/>
                            <br/>
                            <Typography variant={"h4"}> <b>Turtle Mission</b></Typography>
                            <Typography variant={"h5"}> "{mission_object._title}"</Typography>
                            <Typography variant={"h6"} color={"primary"}>Click to reveal</Typography>
                        </CardContent>
                    </div>
                    }
                    />


                {/*<div style={{ height: 20 }}></div>*/}

                {showClock && <Timer_Component/>}

                {/*<div style={{ height: 20 }}></div>*/}

                {!isPictureUploaded && timeElapsed > 10 && <Typography variant={"h5"}> <br></br>Loser - take a Loser photo </Typography>}
                {isPictureUploaded && <Typography variant={"h5"}> <br></br> a Loser photo: </Typography>}


                {timeElapsed > 10 && <CameraComponent buttonText="Your disgraceful Picture" onPictureUpload={handlePictureUpload} curGameNum={curGame._id}/>}
                {!isPictureUploaded && <Button onClick={moveToNextPage}
                                               variant="contained"
                                               color="primary"
                                               size={"medium"}
                                               sx={{textTransform: "none",
                                                   mb: 4,
                                                   fontSize: "20px",
                                                   borderStyle:"solid",
                                                   borderWidth:"2px",
                                                   borderColor: "#D1B067"}}
                >Forfeit</Button>}


                {isPictureUploaded && <Button onClick={moveToNextPage}
                                              variant="contained"
                                              color="primary"
                                              size={"medium"}
                                              sx={{mb: 4}}
                >Finish!</Button> }
            </Container>
        // </Background_loser>
    )
}