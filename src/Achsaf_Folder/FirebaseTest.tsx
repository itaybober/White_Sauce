import React, {useEffect, useMemo, useRef, useState} from 'react';
import Button from "@mui/material/Button";

import {db} from '../config/firebase';
import {doc, setDoc, addDoc, collection, onSnapshot} from 'firebase/firestore';
import {Game, Mission} from "../Components/Classes"
import logo from "../Pages/step-1_logo.svg";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Chwazi from "../Components/Chwazi";
import Circle from "./Circle";
// import firebase from "firebase/compat";
// import Timestamp = firebase.firestore.Timestamp;





function pushToFirebase(){
    for (let i = 6 ; i < 10 ; i++){
        const mission = new Mission(
            "Snack Mission " + i.toString(),
            "Achsaf change things here",["Snacks"], "Group"
        );
        mission.addMissionToFireStore()
    }
}

// @ts-ignore
function FirebaseTest() {

    const [f1,f2] = useState()





    // @ts-ignore
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button style={{width: "50px", height: "50px"}} startIcon={<AddAPhotoIcon/>}
                    onClick={pushToFirebase} />
            {/*<img style={{position: "absolute", bottom: "50%"}} src={logo} width={200} height={200}/>*/}
        </div>
    );
}

export default FirebaseTest;
