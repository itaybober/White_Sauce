import React, {useState} from "react";
import {getDoc, onSnapshot} from "firebase/firestore";
import ToggleButton from "@mui/material/ToggleButton";
import Button from "@mui/material/Button";



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
        <div>
            {selected ? (
                <div>
                    <Button variant="outlined" onClick={ () => {
                        handleToggle()
                        handleNo()
                    }}>No</Button>
                    <Button variant="outlined" onClick={ () =>{
                        handleToggle()
                        handleYes()
                    }}>Yes</Button>
                </div>
            ) : (
                <div>
                    Now We wait
                </div>
            )}

            {/*<ToggleButton*/}
            {/*    color="primary"*/}
            {/*    value="check"*/}
            {/*    selected={selected}*/}
            {/*    onChange={handleToggle}*/}
            {/*>*/}
            {/*    {selected ? 'Waiting' : 'Ready'}*/}
            {/*</ToggleButton>*/}
        </div>



            // <Button variant={"outlined"} onClick={() => {handleNo()}} >No</Button>
            // <Button variant={"outlined"} onClick={handleYes}>Yes</Button>
            //
            // <ToggleButton
            //     color={"primary"}
            // value="check"
            // selected={selected}
            // onChange={handleToggle}
            // >
            // {selected ? "Waiting" : "Ready"}
            // </ToggleButton>


    )
}