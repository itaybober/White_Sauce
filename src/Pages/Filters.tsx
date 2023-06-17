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
import waves from './images/waves.svg'
import bulb from './images/bulb.svg'
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {PAGES} from "./GameManager";
import {Game} from "../Components/Classes";

// @ts-ignore
export default function Filters({curPlayer, setCurGame}) {

    let chosenFilters : string[] = [];
    function next(){
        // each player has a ref to their current game thats how we'll connect to the games quickly
        let newGame = new Game();
        newGame._filters = chosenFilters;
        newGame.addGameToFirestore();
        // @ts-ignore
        curPlayer.setCurPage(PAGES.COVEN);
        curPlayer.setGameRef(newGame._gameRef)
        newGame.addPlayer(curPlayer._playerRef)
        setCurGame(newGame)
        console.log("filters selected:",newGame._filters);
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
                <MyCard icon={active_logo} text="Active" chosenFilters={chosenFilters}/>
                <MyCard icon={shopping} text="Supplies" chosenFilters={chosenFilters}/>
                <MyCard icon={snacks} text="Snacks" chosenFilters={chosenFilters}/>
                <MyCard icon={waves} text="Get wet" chosenFilters={chosenFilters}/>
                <MyCard icon={bulb} text="Riddles" chosenFilters={chosenFilters}/>
                <MyCard icon={drinks} text="Alcohol" chosenFilters={chosenFilters}/>
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

function MyCard(props: React.PropsWithChildren<{ icon: string; text: string, chosenFilters: string[] }>) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        if (isActive) {
            const index = props.chosenFilters.indexOf(props.text);
            props.chosenFilters.splice(index, 1);
        } else {
            props.chosenFilters.push(props.text);
            console.log(props.text, "added to array")
        }
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
                    <Typography variant="h5">{props.text}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}