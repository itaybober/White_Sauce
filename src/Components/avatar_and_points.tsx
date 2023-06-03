import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";

// @ts-ignore
export  default function Avatar_and_points({name ,points}) {
    // eslint-disable-next-line no-restricted-globals
    // if (name===null) {
    //     name="maya"
    // }
    return (


    <Container sx={{width: 350, height: 120, display: 'flex', flexDirection: 'row', justifyContent:  "space-between", alignItems: 'center' }   }>

        <Avatar sx={{bgcolor: "#90ece4" ,width: 60, height: 60}}> {name.slice(0,2)} </Avatar>
        <Container sx={{width: 260, height: 80, display: 'flex', flexDirection: 'column', justifyContent:  "space-between", alignItems: 'flex-start', gap:"10px"}   }>
            <Typography
            variant="h5"> {name} </Typography>

            <Card sx={{ width: 250, height: 45 }   }>

                <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 45 }}>


                     <Typography
                    variant="h6"> {points} points </Typography>
                    <Typography color={"primary"}
                        variant="h6"> #2 </Typography>

                </CardContent>
            </Card>
        </Container>
    </Container >


    );
}
