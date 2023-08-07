import React, {useState} from "react";
import {getDoc, onSnapshot} from "firebase/firestore";
import ToggleButton from "@mui/material/ToggleButton";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";



// @ts-ignore
export default function ToggleReady({curGame,handleNext,handleYes,handleNo}) {
    const [selected, setSelected] = useState(true);
    let [counter, setCounter] = useState(0)

    const unsubscribe = onSnapshot(curGame._gameRef, (snapshot: { data: () => any; }) => {
        if (!curGame || !snapshot || !snapshot.data())
            return
        const data = snapshot.data().ready
        if (typeof data !== 'undefined') {
            if (data === curGame._players.length && counter < 1){
                //     advance all
                curGame.setReady(0)
                setCounter(counter+1)
                unsubscribe()
                handleNext()
            }
        }
    })


    const handleToggle = async () => {
        setSelected(false)
        await curGame.incrementReady()
    }

    return (
        <div style={{
        }}>
            {selected ? (
                <div style={{
                    width: "300px",
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    <Button variant="outlined" onClick={ () => {
                        handleToggle()
                        handleNo()
                    }}
                            sx={{
                                borderStyle:"solid",
                                borderWidth:"2px",
                                borderColor: "#D1B067",
                                color: "white"
                            }}
                    >No</Button>
                    <Button variant="outlined" onClick={ () =>{
                        handleToggle()
                        handleYes()
                    }}
                            sx={{
                                borderStyle:"solid",
                                borderWidth:"2px",
                                borderColor: "#D1B067",
                                color: "white"
                            }}
                    >Yes</Button>
                </div>
            ) : (
                <div style={{ display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexFlow:"column",
                    padding: "30px" }}>
                    <br/>
                    <CircularProgress color="primary" />
                    <br/>
                    <Typography variant={"h5"}>now we wait...<br/></Typography>
                    <br/>

                </div>
            )}

        </div>
    )
}