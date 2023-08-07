import React, {useState} from "react";
import {getDoc, onSnapshot} from "firebase/firestore";
import ToggleButton from "@mui/material/ToggleButton";



// @ts-ignore
export default function ToggleReady({curGame,handleNext}) {
    const [selected, setSelected] = useState(false);
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


        <ToggleButton color={"primary"}
                    value="check"
                    selected={selected}
                    onChange={handleToggle}
                      sx={{textTransform:"none",
                          fontSize: "20px",
                          borderStyle: "solid",
                          borderWidth: "2px",
                          borderColor: "rgba(255, 255, 255, 0.5)"

        }}
        >
        {selected ? "Waiting" : "Ready"}
        </ToggleButton>
    )
}