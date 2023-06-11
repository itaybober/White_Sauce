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
import a from './images/icon/a.png'

// @ts-ignore
export default function Secret_Mission({curPlayer,curGame}) {
    const loser_player = "Guy";

    curGame.getMissionFromDatabase();
    const mission_object = curGame._curMission

    const [itemData, setItemData] = useState([]);


    function forTheDemo(){
        // @ts-ignore
        setItemData([sockhands]);
    }

    // @ts-ignore
    return (
        <Container className={"punishment_page_component"}>
            <Avatar_and_points name={curPlayer._name} points={curPlayer._points} />
            <Flippable_card back_content={
                <div>
                    <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify"}}>
                        <Typography variant="h5" color={"secondary"}> <b> {mission_object._title}</b></Typography>
                        <Typography  sx={{lineHeight: '20px'}} variant={"h6"} >
                            {mission_object._description}
                        </Typography>
                        <Typography>

                        </Typography>
                    </CardContent>
                </div>

            }
                            front_content={
                                <div>
                                    <CardContent sx={{ display: "flex", flexFlow: "column", justifyContent: "center"}}>
                                        <Typography variant={"h4"} >Secret Mission</Typography>
                                        <div style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}>
                                            <img src={a} alt="a" style={{ maxWidth: '30%', maxHeight: '30%', objectFit: 'contain' }} />
                                        </div>
                                        <div style={{ marginTop: "auto" }}>
                                            <Typography variant={"h6"} sx={{ textAlign: "center" }}>Make sure no one is peeking, then click to reveal your secret mission</Typography>
                                        </div>
                                    </CardContent>
                                </div>
                            }
            />

            <Button onClick={()=> curPlayer.setCurPage(PAGES.GROUP)} variant="contained" color="primary" size={"medium"} sx={{
                mb: 4,

            }} >Next</Button>
        </Container>
    )
}