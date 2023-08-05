import React, {useEffect, useMemo, useRef, useState} from 'react';
import Button from "@mui/material/Button";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ToggleButton from "@mui/material/ToggleButton"
import {db} from '../config/firebase';
import {doc, setDoc, addDoc, collection, onSnapshot} from 'firebase/firestore';
import {Game, Mission} from "../Components/Classes"
import logo from "../Pages/step-1_logo.svg";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Chwazi from "../Components/Chwazi";
import Circle from "./Circle";
// import firebase from "firebase/compat";
// import Timestamp = firebase.firestore.Timestamp;





// function pushToFirebase(){
//     for (let i = 6 ; i < 10 ; i++){
//         const mission = new Mission(
//             "Snack Mission " + i.toString(),
//             "Achsaf change things here",["Snacks"], "Group"
//         );
//         mission.addMissionToFireStore()
//     }
// }

// @ts-ignore
function FirebaseTest() {
    const [selected, setSelected] = React.useState(false);

    return (
        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
        >
            {selected ? "Waiting" : "Ready"}
        </ToggleButton>
    );

}

export default FirebaseTest;
