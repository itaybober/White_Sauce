import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {deepOrange, deepPurple, grey} from '@mui/material/colors';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar_and_points from "../Components/avatar_and_points";
import FolderIcon from '@mui/icons-material/Folder';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


import { useTheme } from '@mui/material/styles'
import theme from "../theme"; //for using the theme in component
import "./Survival_mission.css"
import Timer_Component from "../Components/Timer_Component"
import Background from "../Components/Background"
import itay from './Souvenirs/criptai.jpg'
import Demo from "../Achsaf_Folder/Demo";
import Winner_list from "../Components/Winner_list";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {useEffect, useState} from "react";
import {ImageList, ImageListItem} from "@mui/material";
import Container from "@mui/material/Container";
import {db} from '../config/firebase'
import {getDocs, collection} from 'firebase/firestore'
import "../Components/Flippable_card"
import Flippable_card from "../Components/Flippable_card";
import {Game, Mission} from "../Components/Classes";

import { auth } from "../config/firebase";
import gameManager, {PAGES} from "./GameManager";
import CameraComponent from "../Components/CameraComponent";
// import axios from 'axios';
// we need to add the stepper here later

// function  winner_list_update({name,points,bg}){
//     return(
//     <Winner_list name1={"Achsaf"} points1={340} bg1={"#D9FB68"} name2={"Itay"} points2={240} bg2={"#EFB2B2"} name3={name} points3={points} bg3={bg} />
//     )
//
// }

/**
 * in the future we'll add a game param, that will help us with setting unique display
 * for each player
 * @param jump
 * @param toPage
 * @constructor
 */
// @ts-ignore
export default function Survival({curPlayer,curGame}) {

    // curGame.getMissionFromDatabase();


    console.log(curGame._id)
    console.log(curGame._curMission)

    const mission_object = curGame._curMission

    const [itemList, setItemList] = useState<any | null>([])
    const itemCollectionRef = collection(db, "house_items")

    useEffect(()=> { //control when things are happening
        const getItemList = async () => {
        // READ DATA FROM DB
            try {
                const data = await getDocs(itemCollectionRef);
                const filteredData = data.docs.map(
                    (doc)=>({...doc.data()}))
                setItemList(filteredData);
                console.log(filteredData)
            } catch (err) {
                console.error(err)
            }

        }
        getItemList();
    }, [])

    const [itemData, setItemData] = useState([])
    // function next(){
    //     jump(toPage)
    // }


    function addPhoto() {
        // @ts-ignore
        setItemData([itay])
    }
console.log(curPlayer.name)
    return (
        <Container className={"survival_page_component"} sx={{p:2}} >
            <Avatar_and_points name={curPlayer._name} points={curPlayer._points} />
            <Flippable_card back_content={
                <div>
                    <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify" }}>
                        <Typography variant="h5" color={"primary"}> <b> {mission_object._title}</b></Typography>
                    {/*    <Typography variant="h6">Your goal: <span style={{ color: 'pink' }}>{itemList.length > 0 && (<span>{itemList[Math.floor(Math.random() * itemList.length)].name}</span>)}*/}
                    {/*</span></Typography>*/}
                        <Typography variant="h6">

                            {mission_object._description}   </Typography>
                        </CardContent>
                </div>
            }
                            front_content={
                <div>
                    <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify" }}>
                    <Typography variant={"h5"}> {mission_object._title}</Typography>
                    </CardContent>
                </div>



            }/>


            <Timer_Component timerLimit={65}/>

            <Container sx={{ width: 330, flex: 1 }}  >
                <Typography variant={"h5"}><br/>To finish your task take a picture<br/><br/></Typography>
                <CameraComponent buttonText="Take a Photo" />

            </Container>


            <Card sx={{ width: 330, height: 370 } }>
                <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify"}}>
                <Typography variant="h5" color={"primary"}> <b>You better hurry people are starting to finish...</b></Typography>
                <Winner_list name1={"Achsaf"} points1={340} bg1={"#D9FB68"}
                             name2={"?"} points2={0} bg2={"#78909C"}
                             name3={"?"} points3={0} bg3={"#78909C"} />
                </CardContent>
                </Card>


            <Button onClick={()=> curPlayer.setCurPage(PAGES.PUN)} variant="contained" color="primary" size={"medium"} sx={{
                mb: 4,

            }} >Next</Button>
        </Container>
///
    );

}

