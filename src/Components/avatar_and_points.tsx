import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import mask from '../Pages/images/icon/avatar.png'
import coin from "../Pages/images/cards icons/shield.png"

import logo from "../Pages/images/step-1_logo.svg";
import {useEffect} from "react";
import survivel2 from "../Pages/images/cards icons/card14.png";


// @ts-ignore
export default function Avatar_and_points({name = "maya", points, avatarName, avatarRef}) {
    // eslint-disable-next-line no-restricted-globals

    if (name === null) {
        name = "maya"
    }

    const avatarName_new =  avatarName
    const avatarRef_new = avatarRef

    return (


        <Container sx={{
            width: 310,
            // height: 120,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <Avatar alt={mask} src={avatarRef} sx={{width: 60, height: 80}}> </Avatar>

            <Container sx={{
                width: 250,
                height: 80,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "flex-start",
                alignItems:  "flex-start",
                gap: "10px"
            }}>
                <Typography
                    variant="h5"> {name} </Typography>
                <Card sx={{width: 240, height: 45, borderRadius: '10px'}}>
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 45
                    }}>


                        <Typography
                            variant="h6">{points} coins </Typography>

                        <img src={coin} style={{ width: 20, height: 20 }} />

                    </CardContent>
                </Card>
            </Container>
        </Container>


    );
}
