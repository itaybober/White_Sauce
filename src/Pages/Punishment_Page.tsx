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
import Background from "../Components/Background";
import "./Punishment_Page.css"
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
        <div className={"punishment_page_component"}>
            <h1>It's punishment time</h1>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{ width: 370, height: 410 }}>
                    <CardContent sx={{ display: "flex", flexFlow:"column", justifyContent: "flex-start", alignItems: "flex-start" ,textAlign: "justify"}}>
                        <Typography  sx={{lineHeight: '20px'}} variant={"h6"} color="#F78585" >
                            You lost, sucks to suck. <br/><br/>
                            You got one shot,<br/> don't miss your chance to blow <br/><br/>
                            You gotta freestyle,<br/> put on a good show <br/><br/>
                            But if too many verses, <br/> dont manage to land <br/><br/>
                            For the rest of the evening, <br/> you must wear socks on your hands

                            {/*Well, well, well, look who we have here - the ultimate loser! As punishment,*/}
                            {/*you must chug a beer in 30 seconds.*/}
                            {/*We have another treat for you! You must wear your socks*/}
                            {/*on your hands until the end of the evening - wait, what's that? You don't have socks?*/}
                            {/*Well, looks like you'll have to borrow a pair from another contestant!*/}
                            {/*Don't worry, they won't mind. After all, sharing is caring!*/}
                        </Typography>
                        <Typography>

                        </Typography>
                    </CardContent>
                </Card>
            </Container>

            <div style={{ height: 20 }}></div>

            <Timer_Component timerLimit={30} />

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
                            style={{borderRadius: '10px', backgroundColor: 'gray', width: 200, height: 200, margin: 'auto' }}
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