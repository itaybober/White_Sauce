import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import CardContent from '@mui/material/CardContent';
import Avatar_and_points from "../Components/avatar_and_points";
import survivel from '../Pages/images/cards icons/survivel.png'
import "./Survival_mission.css"
import Timer_Component from "../Components/Timer_Component"
import itay from './Souvenirs/criptai.jpg'
import {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {db} from '../config/firebase'
import {getDocs, collection} from 'firebase/firestore'
import "../Components/Flippable_card"
import Flippable_card from "../Components/Flippable_card";
import {PAGES} from "./GameManager";
import CameraComponent from "../Components/CameraComponent";
import Background from "../Components/Background";
import survivel2 from '../Pages/images/cards icons/card14.png'

import arrow from '../Pages/images/cards icons/arrow.png'

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


    // console.log(curGame._id)
    // console.log(curGame._curMission)

    const mission_object = curGame._curMission

    const [itemList, setItemList] = useState<any | null>([])
    const itemCollectionRef = collection(db, "house_items")
    const [isPictureUploaded, setIsPictureUploaded] = useState(false);

    const handlePictureUpload = ()=> {
        setIsPictureUploaded(true);
    }

    useEffect(()=> { //control when things are happening
        const getItemList = async () => {
        // READ DATA FROM DB
            try {
                const data = await getDocs(itemCollectionRef);
                const filteredData = data.docs.map(
                    (doc)=>({...doc.data()}))
                // setItemList(filteredData);
                // console.log(filteredData)
            } catch (err) {
                console.error(err)
            }

        }
        getItemList();
    }, [])

    const [itemData, setItemData] = useState([])

    function addPhoto() {
        // @ts-ignore
        setItemData([itay])
    }
// console.log(curPlayer.name)
    // @ts-ignore
    return (

        <Container className={"survival_page_component"} sx={{p:2}}  >
            <Avatar_and_points name={curPlayer._name} points={curPlayer._points} />
            <Flippable_card back_content={
                <div>
                    <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify" }}>
                        <Typography variant="h5" color={"primary"}> <b> {mission_object._title}</b></Typography>
                        <br/>
                        <Typography variant="h6">
                            {mission_object._description}   </Typography>
                        </CardContent>
                </div>
            }
                            front_content={
                <div>
                    <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "center", alignItems: "center" ,textAlign: "center" }}>

                        <img src={survivel2} style={{ width: 260, height: 110, opacity: 0.7 }} />
                        <br/>
                        <Typography variant={"h4"}> <b>survival mission</b></Typography>
                        <Typography variant={"h5"}> {mission_object._title}</Typography>
                        {/*<div style={{ width: 260, height: 100,display: "flex", flexFlow:"row", justifyContent: "flex-end", alignItems: "flex-end" }}>*/}
                        {/*<img src={arrow} style={{ width: 20, height: 20, opacity: 0.7}} />*/}
                        {/*</div>*/}
                    </CardContent>
                </div>



            }/>


            <Timer_Component timerLimit={65} isPictureUploaded={isPictureUploaded}
                             // TimerClick={() => curGame._curMission._extras[0] += 1


            />

            <Container sx={{ width: 330, flex: 1 }}  >
                <Typography variant={"h5"}><br/>To finish your task take a picture<br/><br/></Typography>
                {/*<CameraComponent buttonText="Take a Photo" />*/}
                <CameraComponent buttonText="Take a Photo" onPictureUpload={handlePictureUpload} curGameNum={curGame._id}/>

            </Container>


            <Button onClick={async ()=> {
                await curGame.updateAllPlayersPages(PAGES.POINTS)
                await curGame.getPunishmentFromDataBase()
                await curPlayer.setCurPage(PAGES.PUN)
            }} variant="contained" color="primary" size={"medium"} sx={{
                mb: 4,

            }} >Next</Button>

        </Container>

///
    );

}

