import React from 'react';
import {useState} from "react";
import "./Filters.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from './images/step-1_logo.svg'
import active_logo from '../Itay_Folder/images/sports-shoes-1-svgrepo-com.svg'
import shopping from './images/shopping-cart.svg'
import snacks from '../Itay_Folder/images/sandwich-svgrepo-com.svg'
import drinks from './images/drink.svg'
import beer from '../Itay_Folder/images/alcohol-beer-drink-glass-wine-svgrepo-com.svg'
import waves from './images/waves.svg'
import bulb from '../Itay_Folder/images/light-bulb-svgrepo-com.svg'
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

            {/*</div>*/}
            <Typography variant={"h4"}  className={"text_container"}><b>what are you
                <br/>
                looking for?</b></Typography>

            <div className={"cards_container"}>
                <MyCard icon={active_logo} text="Active" chosenFilters={chosenFilters}/>
                <MyCard icon={snacks} text="Snacks" chosenFilters={chosenFilters}/>
                <MyCard icon={bulb} text="Riddles" chosenFilters={chosenFilters}/>
                <MyCard icon={beer} text="Alcohol" chosenFilters={chosenFilters}/>
            </div>
            {/*maya edit:*/}
            <div style={{ padding: '20px' }}>
                <Button className={"go-btn"}
                        onClick={next}
                        variant={"contained"}
                        size={"large"}>
                    let's goooo
                </Button>

            </div>
        </Container>

    );
}

// <Button onClick={next} variant="contained" className={"go_button"}> הגרסה הקודמת

function MyCard(props: React.PropsWithChildren<{ icon: string; text: string, chosenFilters: string[] }>) {
    const [isActive, setIsActive] = useState(false);
    const iconSize = props.text === "Alcohol" ? 80 : 80;

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
                backgroundColor: isActive ? "#d1b067" : "#74748a",
            }}
            className={"card_container"}
            onClick={handleClick}
        >
            <CardActionArea className={"cardAction"}>
                <CardMedia
                    className={"card_media"}
                    component="img"
                    image={props.icon}
                    style={{ width: iconSize, height: iconSize }}
                />
                <CardContent>
                    <Typography variant="h5">{props.text}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}