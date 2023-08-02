import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import CardContent from '@mui/material/CardContent';
import Avatar_and_points from "../Components/avatar_and_points";
import { useState } from "react";
import { Container } from "@mui/material";
import friends from "./Souvenirs/tangled.jpg"
import Flippable_card from "../Components/Flippable_card";
import { PAGES } from "./GameManager";
import CameraComponent from "../Components/CameraComponent";
import shield from '../Pages/images/cards icons/card13.png'
import {log} from "util";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';


    // @ts-ignore
export default function GroupMission({ curPlayer, curGame, isGameOver }) {
    const mission_object = curGame._curMission;
    const [itemData, setItemData] = useState([]);
    const [isPictureUploaded, setIsPictureUploaded] = useState(false);

    const handlePictureUpload = ()=> {
        setIsPictureUploaded(true);
        curGame.addPointsSinglePlayer(curPlayer, 0);
    }
    function addPhoto() {
        // @ts-ignore
        setItemData([friends]);
    }

    return (
        <Container className={"group_mission_component"} sx={{ p: 2 }}>
            <Avatar_and_points name={curPlayer._name} points={curPlayer._points} />
            <Flippable_card
                back_content={
                    <CardContent sx={{ display: "flex", flexFlow: "column", justifyContent: "flex-start", alignItems: "flex-start", textAlign: "justify" }}>
                        <Typography variant="h5" color={"primary"}>{mission_object._title}</Typography>
                        <br />
                        <Typography variant="h6">
                            {mission_object._description}
                        </Typography>
                    </CardContent>
                }

                front_content={
                    <div>
                        <CardContent sx={{ display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                            <img src={shield} style={{ width: 200, height: 200, opacity: 0.7 }} />
                            <br />
                            <Typography variant={"h4"}> <b>tribe mission</b></Typography>
                            <Typography variant={"h5"}> {mission_object._title}</Typography>
                        </CardContent>
                    </div>
                }
            ></Flippable_card>

            <CameraComponent buttonText="Proof Of Concept" onPictureUpload={handlePictureUpload} curGameNum={curGame._id}/>

            {isGameOver ? (
                <Card sx={{ mb: 4 }}>
                    <CardContent>
                        <Typography variant="h6">
                            Did you succeed in the secret mission?
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            onClick={ () => {
                                console.log("clicked")
                                curGame.updateAllPlayersPages(PAGES.END); // Transition to the next page
                            }}
                        >
                            Yes
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="medium"
                            onClick={() => {
                                curGame.updateAllPlayersPages(PAGES.END); // Transition to the next page
                            }}
                        >
                            No
                        </Button>
                    </CardActions>
                </Card>
            ) : (
                <Button
                    onClick={() => {
                        curGame.updateAllPlayersPages(PAGES.POINTS)
                    }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    sx={{
                        mb: 4,
                    }}
                >
                    Next
                </Button>
            )}
        </Container>
    );

}


