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
export  default function Avatar_and_points({name, points}) {
    return (

    <Container sx={{width: 360, height: 90, display: 'flex', flexDirection: 'row', justifyContent:  "space-between", alignItems: 'center' }   }>

        <Avatar sx={{bgcolor: "#90ece4" ,width: 60, height: 60}}> MS </Avatar>
        <Container sx={{width: 280, height: 65, display: 'flex', flexDirection: 'column', justifyContent:  "space-between", alignItems: 'flex-start'}   }>
            <Typography
            variant="subtitle1"> {name} </Typography>

            <Card sx={{ width: 250, height: 45 }   }>

                <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 45 }}>


                     <Typography
                    variant="subtitle1"> points : {points} </Typography>
                    <Typography color={"primary"}
                        variant="subtitle1"> #2 </Typography>

                </CardContent>
            </Card>
        </Container>
    </Container >


    );
}
