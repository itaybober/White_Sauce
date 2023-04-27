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
import join_Page from "./Join_Page";

// @ts-ignore
export default function Filters({jump}) {
    return(
        <div className={"filter"}>
            <div className={"logo_container"}>
                <img src={logo} width={103} height={85}/>
            </div>
            <h2
                style={{fontSize: 40}}
                className={"text_container"}
            >
                what are you
                <br/>
                looking for?
            </h2>
            <div className={"cards_container"}>
                <MyCard icon={active_logo} text="Active" />
                <MyCard icon={shopping} text="supplies" />
                <MyCard icon={snacks} text="snacks" />
                <MyCard icon={waves} text="get wet" />
                <MyCard icon={sunshine} text="day time" />
                <MyCard icon={night} text="night time" />
                <MyCard icon={bulb} text="riddles" />
                <MyCard icon={drinks} text="drinks" />

            </div>
            <p></p>
            <Button className={"go_button"}>
                let's goooo
            </Button>
        </div>
    );
}


function MyCard(props: React.PropsWithChildren<{ icon: string; text: string }>) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <Card
            sx={{
                maxWidth: 160,
                backgroundColor: isActive ? "#6fa1ee" : "white",
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
                    <Typography className={"typo_card"}>{props.text}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}







