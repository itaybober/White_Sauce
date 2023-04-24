import {LinearProgress, TextField} from "@mui/material";

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
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { useTheme } from '@mui/material/styles'
import theme from "../theme"; //for using the theme in component


// we need to add the stepper here later
function survival() {

    return (
        <div>

            {/* Avatar- head of the page*/}
            <Avatar sx={{ bgcolor: "secondary" }}>MS</Avatar>

            <Box
                sx={{
                    width: 360,
                    height: 182,
                    backgroundColor: "secondary"}}>
            the content of the mission
                </Box>
            {/*box=the bg*/}




            <Box
                sx={{
                    width: 360,
                    height: 182,
                    backgroundColor:"primary"}}> //example for using our var in the page

            {/*<TextField id="filled-basic" label="survival" variant="filled">*/}
                <Typography variant="h4" color={"primary"} >survival</Typography>
                <Typography variant="h6"  >Don't be last</Typography>
                <Typography variant="subtitle2" >Lorem ipsum dolor sit amet, consec
                    tetur adipiscing elit
                    dcvndknv
                    klcnjxvnxknvkcvc </Typography>

            </Box>

            {/*</TextField>*/}

            {/*//button in the bottom part*/}
            <Button variant="contained" color="secondary" size={"medium"} >I finished</Button>
        </div>
            )
}
export default survival

// timer-bottom of the page
function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    return (
        <div className = "container">

        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
        </div>

    );
}
//
// export default function CircularStatic() {
//     const [progress, setProgress] = React.useState(10);
//
//     React.useEffect(() => {
//         const timer = setInterval(() => {
//             setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//         }, 800);
//         return () => {
//             clearInterval(timer);
//         };
//     }, []);
//
//     return <CircularProgressWithLabel value={progress} />;
// }