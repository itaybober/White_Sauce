import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Countdown_Component from "../Components/Countdown_Component";
import * as React from "react";
import {ImageList, ImageListItem} from "@mui/material";
import sockhands from './Souvenirs/sockhands.jpg'
import {useState} from "react";
import Background_loser from "../Components/Background-loser";
import "./Punishment_Page.css"
import Avatar_and_points from "../Components/avatar_and_points";
import Flippable_card from "../Components/Flippable_card";
import {PAGES} from "./GameManager";
// @ts-ignore
export default function Punishment({curPlayer,curGame}) {
    const loser_player = "Guy";

    curGame.getMissionFromDatabase();
    const mission_object = curGame._curMission

    const [itemData, setItemData] = useState([]);

    // function next(){
    //     jump(toPage)
    // }

    function forTheDemo(){
        // @ts-ignore
        setItemData([sockhands]);
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <Background_loser>
            <Container className={"punishment_page_component"}>
                <Avatar_and_points name={"Maya"} points={430} />
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Flippable_card back_content={
                    <div>
                        <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify"}}>
                            <Typography variant="h5" color={"secondary"}> <b> {mission_object._title}</b></Typography>
                            <Typography  sx={{lineHeight: '20px'}} variant={"h6"} >
                                <br/>You lost, sucks to suck. <br/><br/>
                                {mission_object._description}
                                {/*
                                You got one shot,<br/> don't miss your chance to blow <br/><br/>
                                You gotta freestyle,<br/> put on a good show <br/><br/>
                                But if too many verses, <br/> dont manage to land <br/><br/>
                                For the rest of the evening, <br/> you must wear socks on your hands
*/}
                                {/*Well, well, well, look who we have here - the ultimate loser! As punishment,*/}
                                {/*you must chug a beer in 30 seconds.*/}
                                {/*We have another treat for you! You must wear your socks*/}
                                {/*on your hands until the end of the evening - wait, what's that? You don't have socks?*/}
                                {/*Well, looks like you'll have to borrow a pair from another contestant!*/}
                                {/*Don't worry, they won't mind. After all, sharing is caring!*/}
                            </Typography>
                            <Typography>

                            </Typography>
                        </CardContent>
                    </div>


                    }
                    front_content={
                    <div>
                        <CardContent sx={{display: "flex", flexFlow:"column", justifyContent: "center" ,textAlign: "justify" }}>
                            <Typography variant={"h4"}> {mission_object._title}</Typography>
                        </CardContent>
                    </div>
                    }
                    />


                {/*<div style={{ height: 20 }}></div>*/}

                <Countdown_Component />

                {/*<div style={{ height: 20 }}></div>*/}

                <Typography variant={"h5"}> <br></br>Loser - take a Loser photo </Typography>

                {/*<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>*/}
                <Button onClick={forTheDemo} variant="contained" color={"secondary"} startIcon={<AddAPhotoIcon />}>Take a disgraceful Picture</Button>
                {/*</div>*/}

                <ImageList variant="masonry" cols={2} gap={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {itemData.map((item) => (
                        <ImageListItem key={item}>
                            <img
                                src={`${item}?w=248&fit=crop&auto=format`}
                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item}
                                loading="lazy"
                                style={{borderRadius: '10px', backgroundColor: 'gray', width: 200, height: 200, margin: 'auto' }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                <Button onClick={()=> curPlayer.setCurPage(PAGES.GROUP)} variant="contained" color="primary" size={"medium"} sx={{
                    mb: 4,

                }} >Next</Button>
            </Container>
        </Background_loser>
    )
}