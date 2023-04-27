

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

import Demo from "../Achsaf_Folder/Demo";
import Winner_list from "../Components/Winner_list";
import Punishment from "./Punishment_page";
// we need to add the stepper here later

// function  winner_list_update({name,points,bg}){
//     return(
//     <Winner_list name1={"Achsaf"} points1={340} bg1={"#D9FB68"} name2={"Itay"} points2={240} bg2={"#EFB2B2"} name3={name} points3={points} bg3={bg} />
//     )
//
// }
// @ts-ignore
export default function survival({jump}) {

    function next(){
        jump(8)
    }


    return (<Background>
        <div className={"survival_page_component"}>

            <Avatar_and_points name={"Maya"} points={430}/>

            <Card sx={{ width: 330, height: 160 }   }>
                <CardContent className={"align_to_the_left"} sx={{alignItems: 'center'}}>
                    <Typography variant="h5" color={"primary"}> Survival</Typography>
                    <Typography variant="h6">Don't be last</Typography>
                    <Typography variant="subtitle2">
                        Lorem ipsum dolor sit amet
                    </Typography>
                        <Typography display="block"> Mxbxnc xn vmz kc kcvjbck c,m </Typography>




                </CardContent>
            </Card>



            <Card sx={{ width: 330, height: 240 } }>
                <Winner_list name1={"Achsaf"} points1={340} bg1={"#D9FB68"} name2={"Itay"} points2={240} bg2={"#EFB2B2"} name3={"?"} points3={0} bg3={"#78909C"} />
                </Card>





            <Timer_Component/>

            <Button onClick={next}  variant="contained" size={"medium"}>I finished</Button>

        </div>
        </Background>
    );

}

