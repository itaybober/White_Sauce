import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Timer_Component from "../Components/Timer_Component";
import * as React from "react";
import {ImageList, ImageListItem} from "@mui/material";
import sockhands from './Souvenirs/sockhands.jpg'
import {useState} from "react";

// @ts-ignore
export default function Punishment({ jump, toPage }) {
    const loser_player = "Guy";

    const [itemData, setItemData] = useState([]);

    function next(){
        jump(toPage)
    }

    function forTheDemo(){
        // @ts-ignore
        setItemData([sockhands]);
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <h1>It's punishment time</h1>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{ width: 300, height: 300 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Typography sx={{ fontSize: 22 }} color="red" gutterBottom>
                            Well, well, well, look who we have here - the ultimate loser! As punishment,
                            you must chug a beer in 30 seconds - and no dribbling.
                            We have another treat for you! You must wear your socks
                            on your hands until the end of the evening - wait, what's that? You don't have socks?
                            Well, looks like you'll have to borrow a pair from another contestant!
                            Don't worry, they won't mind. After all, sharing is caring!
                        </Typography>
                    </CardContent>
                </Card>
            </Container>

            <div style={{ height: 20 }}></div>

            <Timer_Component />

            <div style={{ height: 20 }}></div>

            <h2>Loser - take a Loser photo </h2>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
                <Button onClick={forTheDemo} variant="contained" startIcon={<AddAPhotoIcon />}>Take a disgraceful Picture</Button>
            </div>

            <ImageList variant="masonry" cols={2} gap={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                {itemData.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            src={`${item}?w=248&fit=crop&auto=format`}
                            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item}
                            loading="lazy"
                            style={{ backgroundColor: 'gray', width: 200, height: 200, margin: 'auto' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

                <Button onClick={next} variant="contained" color="primary" size={"medium"} sx={{
                    mb: 2,
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                }} >Next</Button>
        </div>
    )
}