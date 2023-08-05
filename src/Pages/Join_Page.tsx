import "./Join_Page.css"
import {TextField, Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import logo from "./images/step-1_logo.svg";
import React, {useState} from "react";
import { db} from "../config/firebase";
import {PAGES} from "./GameManager";
import {doc, getDoc} from "firebase/firestore";
import galiLogo from "./images/gali_test_logo.png";
import Button from "@mui/material/Button";

// @ts-ignore

function Join_Page( {curPlayer, curGame} ) {

    const [gameToJoin, setGameToJoin] = useState<string>("");

    function handleChange(event: { target: { value: React.SetStateAction<string>; }; }) {
        setGameToJoin(event.target.value)
    }

    function connectToGame(gameID: string){
        const gameRef = doc(db, "Games", gameID);
        getDoc(gameRef)
            .then((docSnapshot) => {
                if (docSnapshot.exists()){
                    // TODO this is the idea
                    console.log("Connecting to game: " + gameID)
                    curPlayer.setGameRef(gameRef)
                    curGame._gameRef = gameRef
                    curGame.addPlayer(curPlayer._playerRef)
                    curPlayer.setCurPage(PAGES.WAIT)

                } else {
                    console.log("No such game")
                }
            })
            .catch( (error) => {
                console.error('Error getting document:', error);
            })

    }

    // @ts-ignore
    function enterValue(ev) {
        if (ev.key === "Enter"){
            connectToGame(gameToJoin)
            setGameToJoin("")
            ev.preventDefault();
        }
    }

    const handleEnterPress = () => {
        connectToGame(gameToJoin)
        setGameToJoin("")
    }

    const goToPrevPage = () => {
        curPlayer.setCurPage(PAGES.START);
    }

    return (
    <div id={"JoinPage_Background"}>
            <Typography variant={"h3"} id={"JoinPage_Title"}><b>Enter Cypher</b></Typography>
            <div id={"JoinPage_Input"}>
            <TextField value={gameToJoin} onChange={handleChange} onKeyDown={enterValue} inputProps={{min: 0, style: { textAlign: 'center' }}}
               placeholder={"PIN"} sx={{ textAlign: 'center', position:'relative', top:'50%' }}  variant="outlined" />
            </div>
        <div className={"buttons"}>
            <Button id={"Enter"} onClick={handleEnterPress}>Enter</Button>
            {/*<Button id={"goBack"} onClick={goToPrevPage}>go back</Button>*/}
        </div>
            </div>

    )

}

export default Join_Page