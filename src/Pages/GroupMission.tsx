import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import CardContent from '@mui/material/CardContent';
import Avatar_and_points from "../Components/avatar_and_points";
import "./Survival_mission.css"
import {useState} from "react";
import {Container} from "@mui/material";
import friends from "./Souvenirs/tangled.jpg"
import "./GroupMission.css"
import Flippable_card from "../Components/Flippable_card";
import {PAGES} from "./GameManager";
import CameraComponent from "../Components/CameraComponent";
import group2 from '../Pages/images/cards icons/group2.png'

// we need to add the stepper here later
// function  winner_list_update({name,points,bg}){
//     return(
//     <Winner_list name1={"Achsaf"} points1={340} bg1={"#D9FB68"} name2={"Itay"} points2={240} bg2={"#EFB2B2"} name3={name} points3={points} bg3={bg} />
//     )
//
// }
// @ts-ignore

export default function GroupMission({curPlayer,curGame}) {

    curGame.getMissionFromDatabase();
    const mission_object = curGame._curMission

    const [itemData, setItemData] = useState([]);
    // function next(){
    //     jump(toPage)
    // }

    function addPhoto() {
        // @ts-ignore
        setItemData([friends])
    }


    return (
            <Container className={"group_mission_component"}>

                <Avatar_and_points name={curPlayer._name} points={curPlayer._points} />
                <Flippable_card
                    back_content={
                    <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify"}}>
                        <Typography variant="h5" color={"primary"}>{mission_object._title}</Typography>
                        <Typography variant="h6">
                            {mission_object._description}

                            {/*Gather round in a circle and face each other. Each one must grab two friends at random,*/}
                            {/*you must untangle yourselves without letting go. <br/><br/>*/}
                            {/*You win when everyone is as open as their hearts.*/}

                            {/*Gather round and stand in a circle facing each other. Reach out a hand*/}
                            {/*and grab a friends hand,*/}
                            {/*<span style={{ color: 'pink' }}> tight and strong like your friendship</span>.*/}
                            {/*Got a hand? Good, a hand with, socks?*/}
                            {/*even better. Now reach*/}
                            {/*out another hand to a weaker friend with your weaker hand. The goal is simple you must untangle*/}
                            {/*your hands without letting go of each others hands. The task is complete when you all stand*/}
                            {/*in a circle with no crossed hands among you.*/}
                        </Typography>
                    </CardContent>
                }


                front_content={
                    <div>
                        <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify" }}>
                            <img src={group2} width={200} height={150}/>
                            <Typography variant={"h5"}> {mission_object._title}</Typography>
                        </CardContent>
                    </div>
                                }


                ></Flippable_card>


                <CameraComponent buttonText="Proof Of Concept" />

                <Button onClick={()=> curPlayer.setCurPage(PAGES.END)} variant="contained" color="primary" size={"medium"} sx={{
                    mb: 4,

                }} >Next</Button>
            </Container>
    );

}

