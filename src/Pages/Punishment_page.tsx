import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Timer_Component from "../Components/Timer_Component";
import * as React from "react";
import {ImageList, ImageListItem} from "@mui/material";


export default function Punishment({ jump }: { jump: (arg: number) => void }) {
    const loser_player = "Guy";

    const itemData = [{ img: 'image-1.jpg', title: 'Image 1' }];

    function next(){
        jump(10)
    }

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

                <Button onClick={next} variant="contained" color="primary" size={"medium"} sx={{
                    mb: 2,
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                }} >Next</Button>
        </div>
    )
}