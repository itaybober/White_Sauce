import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {Timer_Component} from "../Components/Timer_Component";
import * as React from "react";
import {ImageList, ImageListItem} from "@mui/material";

function Punishment() {
    const loser_player = "Guy";

    const itemData = [{ img: 'image-1.jpg', title: 'Image 1' }];


    return (
        <div>
            <h1>It's punishment time</h1>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{ width: 300, height: 300 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Typography sx={{ fontSize: 22 }} color="red" gutterBottom>
                            good good good looks like {loser_player} deserves a punishment!! In 15 seconds you will do something. If you are disqualified, you will forever be remembered as "The Big Big Loser"
                        </Typography>
                    </CardContent>
                </Card>
            </Container>

            <div style={{ height: 20 }}></div>

            <Timer_Component />

            <div style={{ height: 20 }}></div>

            <h2>Loser - take a Loser photo </h2>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
                <Button variant="contained" startIcon={<AddAPhotoIcon />}>Take a disgraceful Picture</Button>
            </div>

            <ImageList variant="masonry" cols={2} gap={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ backgroundColor: 'gray', width: 200, height: 200, margin: 'auto' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

                <Button variant="contained" color="primary" size={"medium"} sx={{
                    mb: 2,
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                }} >Next</Button>
        </div>
    )
}

export default Punishment;

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