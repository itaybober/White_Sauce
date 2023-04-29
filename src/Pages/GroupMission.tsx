
import Container from '@mui/material/Container';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {ImageList, ImageListItem} from "@mui/material";
import {useState} from "react";
import untangle from "./Souvenirs/untangle.gif"


// @ts-ignore
export default function GroupMission({ jump , toPage}) {

    function next(){
        jump(toPage)
    }

    const [gifs, setGifs] = useState([untangle])

    function forDemo() {
        // @ts-ignore
        setGifs([untangle])
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <div >
            <div>
                <h1> Group mission!</h1>
            </div>


            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{ width: 300, height: 300 }   }>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                            Alright, folks, it's time to channel our inner acrobats because we're about to play
                            the human pretzel game! Gather round and stand in a circle facing eachother. Reach out a hand
                            and grab a friends hand, tight and strong like your friendship. Got a hand? Good, a hand with, socks?
                            even better. Now reach
                            out another hand to a weaker friend with your weaker hand. The goal is simple you must untangle
                            your hands without letting go of each others hands. The task is complete when you all stand
                            in a circle with no crossed hands among you.
                        </Typography>
                    </CardContent>
                </Card>
            </Container>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
                <Button variant="contained" startIcon={<AddAPhotoIcon />}>Take a Picture</Button>
            </div>


            <Button onClick={next}  variant="contained" color="primary" size={"medium"} sx={{
                mb: 2,
                position: 'fixed',
                bottom: 0,
                right: 0,
            }} >Next</Button>


        </div>

    )
}

