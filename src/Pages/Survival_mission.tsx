

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar_and_points from "../Components/avatar_and_points";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { useTheme } from '@mui/material/styles'
import theme from "../theme"; //for using the theme in component


// we need to add the stepper here later
export default function survival() {

    return (
        <section>
            <Avatar_and_points name={"Maya"} points={430}/>

            <Card>
                <CardContent>
                    <Typography variant="h4" color={"primary"}>survival</Typography>
                    <Typography variant="h6">Don't be last</Typography>
                    <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consec
                        tetur adipiscing elit
                        dcvndknv
                        klcnjxvnxknvkcvc </Typography>


                </CardContent>
            </Card>


            <Button variant="contained" color="secondary" size={"medium"}>I finished</Button>

        </section>
    );

}

