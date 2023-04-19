import {IconButton, LinearProgress, TextField} from "@mui/material";

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
import CameraIcon from '@mui/icons-material/Camera';
import Dugma from "./Dugma";




function punishment() {

    return (
        <div>
            )
            // LinearProgress- head of the page
            <LinearProgress color="secondary"/>
            <LinearProgress color="success"/>
            <LinearProgress color="inherit"/>

            // Avatar- head of the page
            <Avatar sx={{ bgcolor: deepOrange[500] }}>MS</Avatar>

            // the content of the mission
            // box=the bg
            <Box
                sx={{
                    width: 360,
                    height: 182,
                    backgroundColor: 'primary.dark'}}/>

                <Typography variant="h4" >It's punishment time</Typography>
                <Typography variant="subtitle2" >Lorem ipsum dolor sit amet, consec
                    tetur adipiscing elit
                    dcvndknv
                    klcnjxvnxknvkcvc </Typography>


            <IconButton aria-label="photo_camera" size="large">
                <CameraIcon fontSize="small" />
                </IconButton>

            //button in the bottom part
            <Button variant="contained" color="primary" size={"medium"} >I finished</Button>
        </div>
    )
}

export default punishment

// timer-bottom of the page
// function CircularProgressWithLabel(
//     props: CircularProgressProps & { value: number },
// ) {
//     return (
//         <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//             <CircularProgress variant="determinate" {...props} />
//             <Box
//                 sx={{
//                     top: 0,
//                     left: 0,
//                     bottom: 0,
//                     right: 0,
//                     position: 'absolute',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                 }}
//             >
//                 <Typography
//                     variant="caption"
//                     component="div"
//                     color="text.secondary"
//                 >{`${Math.round(props.value)}%`}</Typography>
//             </Box>
//         </Box>
//     );
// }
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