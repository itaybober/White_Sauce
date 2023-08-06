import React, {useState} from "react";
import {getDoc, onSnapshot} from "firebase/firestore";
import ToggleButton from "@mui/material/ToggleButton";



// @ts-ignore
export default function ToggleReady({curGame,handleNext}) {
    const [selected, setSelected] = useState(false);


    onSnapshot(curGame._gameRef, (snapshot: { data: () => any; }) => {
        if (!curGame || !snapshot || !snapshot.data())
            return
        const data = snapshot.data().ready
        if (typeof data !== 'undefined') {
            if (data === curGame._players.length){
                //     advance all
                curGame.setReady(0)
                handleNext()
            }
        }
    })



    const handleToggle = async () => {
        setSelected(!selected);
        if (!selected) {
            await curGame.incrementReady()
        } else {
            await curGame.decrementReady()
        }

        // let totalNumOfPlayers = 0;
        // await getDoc(curGame._gameRef).then((docSnapshot) => {
        //     if (docSnapshot.exists()){
        //         // @ts-ignore
        //         totalNumOfPlayers = docSnapshot.data().ready
        //     }
        // })
        // if (totalNumOfPlayers === curGame._players.length){
        //     //     advance all
        //     curGame.setReady(0)
        //     handleNext()
        // }
    }



    return (


        <ToggleButton
            color={"primary"}
        value="check"
        selected={selected}
        onChange={handleToggle}
        >
        {selected ? "Waiting" : "Ready"}
        </ToggleButton>
    )
}