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

    <Container sx={{ width: 228, height: 45 ,flexDirection: 'row' }   }>
        <Card sx={{ width: 228, height: 45 }   }>
            <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Avatar sx={{bgcolor: "secondary"}}> MS </Avatar>
                <Typography variant="subtitle1"> {name}</Typography>
                <Typography
                variant="subtitle1"> points : {points} </Typography>)
            </CardContent>
        </Card>
    </Container >


    );
}
