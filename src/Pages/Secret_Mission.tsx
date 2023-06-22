import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import * as React from "react";
import {useState} from "react";
import "./Punishment_Page.css"
import Avatar_and_points from "../Components/avatar_and_points";
import Flippable_card from "../Components/Flippable_card";
import {PAGES} from "./GameManager";
import secret from './images/cards icons/card11.png'
// import survivel2 from "./images/cards icons/card14.png";

// @ts-ignore
export default function Secret_Mission({curPlayer,curGame}) {
    const loser_player = "Guy";

    const mission_object = curPlayer._secretMission

    console.log(mission_object)

    const [itemData, setItemData] = useState([]);

    // @ts-ignore
    return (
        <Container className={"punishment_page_component"}>
            <Avatar_and_points name={curPlayer._name} points={curPlayer._points} />
            <Flippable_card back_content={
                <div>
                    <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify" }}>
                        <Typography variant="h5" color={"primary"}> <b> {mission_object.title}</b></Typography>
                        <br/>
                        <Typography variant="h6">
                            {mission_object.description}   </Typography>
                    </CardContent>
                </div>

            }
                front_content={
                    <div>
                        <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "center", alignItems: "center" ,textAlign: "center" }}>
                            <img src={secret} style={{ width: 180, height: 200, opacity: 0.7 }} />
                            <br/>
                            <Typography variant={"h4"}> <b>Secret Mission</b></Typography>
                            <Typography variant={"h6"}> Make sure no one is peeking, then click to reveal your secret mission</Typography>
                            {/*<Typography variant={"h4"} >Secret Mission</Typography>*/}
                            {/*<div style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}>*/}
                            {/*    <img src={secret} alt="a" style={{ maxWidth: '30%', maxHeight: '30%', objectFit: 'contain' }} />*/}
                            {/*</div>*/}
                            {/*/!*<div style={{ marginTop: "auto" }}>*!/*/}
                            {/*    <Typography variant={"h6"} sx={{ textAlign: "center" }}></Typography>*/}
                            {/*</div>*/}
                        </CardContent>
                    </div>
                }
        />

            <Button onClick={()=> curGame.updateAllPlayersPages(PAGES.SURV)} variant="contained" color="primary" size={"medium"} sx={{
                mb: 4,

            }} >Next</Button>
        </Container>
    )
}