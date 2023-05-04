

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
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
import {useState} from "react";
import {ImageList, ImageListItem} from "@mui/material";
// we need to add the stepper here later

// function  winner_list_update({name,points,bg}){
//     return(
//     <Winner_list name1={"Achsaf"} points1={340} bg1={"#D9FB68"} name2={"Itay"} points2={240} bg2={"#EFB2B2"} name3={name} points3={points} bg3={bg} />
//     )
//
// }
// @ts-ignore
export default function Survival({jump, toPage}) {

    const [itemData, setItemData] = useState([])
    function next(){
        jump(toPage)
    }

    function addPhoto() {
        // @ts-ignore
        setItemData([itay])
    }

    return (<Background>
        <div className={"survival_page_component"}>

            <Avatar_and_points name={"Maya"} points={430}/>

            <Card sx={{ width: 370, height: 320 }   }>
                <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify"}}>
                    <Typography variant="h5" color={"primary"}> Seek And Ye Shall Find</Typography>
                    <Typography variant="h6">Your goal: <span style={{ color: 'pink' }}>Wine Bottle Cork</span></Typography>
                    <Typography variant="h6">
                        The faster you find your object the more you gain.
                        Anyone who doesn't find their object by the end of the timer must participate in the penalty.
                        May the odds be ever in your favor.
                    </Typography>
                        <Typography display="block">Take a photo of yourself with your new spirit object.</Typography>
                </CardContent>
            </Card>



            <Card sx={{ width: 370, height: 240 } }>
                <Winner_list name1={"Achsaf"} points1={340} bg1={"#D9FB68"}
                             name2={"Itay"} points2={240} bg2={"#EFB2B2"}
                             name3={"?"} points3={0} bg3={"#78909C"} />
                </Card>

            <Timer_Component timerLimit={60}/>

            <Button onClick={addPhoto}  startIcon={<AddAPhotoIcon />} variant="contained" size={"medium"}>Proof Of Concept</Button>

            <ImageList variant="masonry" cols={2} gap={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                {itemData.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            src={`${item}?w=248&fit=crop&auto=format`}
                            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item}
                            loading="lazy"
                            style={{ backgroundColor: 'gray', width: 200, height: 200, margin: 'auto' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Button onClick={next} variant="contained" color="primary" size={"medium"} sx={{
                mb: 2,
                position: 'fixed',
                bottom: 0,
                right: 0,
            }} >Next</Button>
        </div>
        </Background>
    );

}

