import React, {useEffect, useMemo, useRef, useState} from 'react';
import Button from "@mui/material/Button";

import {db} from '../config/firebase';
import {doc, setDoc, addDoc, collection, onSnapshot} from 'firebase/firestore';
import {Game, Mission} from "../Components/Classes"
import logo from "../Pages/step-1_logo.svg";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
// import firebase from "firebase/compat";
// import Timestamp = firebase.firestore.Timestamp;





function pushToFirebase(){


    const filters = ["Active", "Alcohol",  "Non-Alcohol", "Non-Shopping", "Riddle", "Snacks"]
    const types = ["Group", "Survival"]

    filters.map( (filter) =>{
        let counter = 1;
        types.map( (type) => {
            const mission = new Mission(
                filter + " Mission " + counter.toString(),
                "This an "+ filter + " mission that is meant for " + type,
                [filter],
                type
            );
            counter += 1
            mission.addMissionToFireStore()
        } )
    } )
}

// @ts-ignore
function FirebaseTest() {







    // @ts-ignore
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button style={{width: "50px", height: "50px"}} startIcon={<AddAPhotoIcon/>}
                    onClick={pushToFirebase} />
            <img style={{position: "absolute", bottom: "50%"}} src={logo} width={200} height={200}/>
        </div>
    );
}

export default FirebaseTest;
