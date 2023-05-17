import React from 'react';
import {useState} from "react";
import "./Filters.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from './images/step-1_logo.svg'
import active_logo from './images/running.svg'
import shopping from './images/shopping-cart.svg'
import snacks from './images/snacks.svg'
import drinks from './images/drink.svg'
import night from './images/night.svg'
import sunshine from './images/sunshine.svg'
import waves from './images/waves.svg'
import bulb from './images/bulb.svg'
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

// @ts-ignore
export default function Filters({jump, toPage}) {
    function next(){
        jump(toPage)
    }

    return(


        <Container className={"filter"} sx={{p:5}}>
            {/*<div className={"logo_container"}>*/}
                <img src={logo} width={103} height={85}/>
            {/*</div>*/}
            <Typography variant={"h4"}  className={"text_container"}><b>what are you
                <br/>
                looking for?</b></Typography>

            <div className={"cards_container"}>
                <MyCard icon={active_logo} text="active" />
                <MyCard icon={shopping} text="supplies" />
                <MyCard icon={snacks} text="snacks" />
                <MyCard icon={waves} text="get wet" />
                <MyCard icon={sunshine} text="day time" />
                <MyCard icon={night} text="night time" />
                <MyCard icon={bulb} text="riddles" />
                <MyCard icon={drinks} text="drinks" />

            </div>

            {/*maya edit:*/}
            <div style={{ padding: '20px' }}>
                <Button onClick={next} variant="contained">
                    let's goooo
                </Button>

            </div>
        </Container>

    );
}

// <Button onClick={next} variant="contained" className={"go_button"}> הגרסה הקודמת

function MyCard(props: React.PropsWithChildren<{ icon: string; text: string }>) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <Card
            sx={{
                maxWidth: 160,
                // maya edit:
                backgroundColor: isActive ? "#058378" : "#54666D",
            }}
            className={"card_container"}
            onClick={handleClick}
        >
            <CardActionArea>
                <CardMedia
                    className={"card_media"}
                    component="img"
                    height="161"
                    width="161"
                    image={props.icon}
                />
                <CardContent>
                     {/*maya edit:*/}
                    <Typography variant="h5">{props.text}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}




// className={"typo_card"}


