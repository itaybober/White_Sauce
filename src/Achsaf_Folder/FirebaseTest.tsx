import React, {useEffect, useState} from 'react';
import {db} from '../config/firebase';
import {doc, setDoc, addDoc, collection} from 'firebase/firestore';
import {Game} from "../Components/Classes"
import logo from "../Pages/step-1_logo.svg";
// import firebase from "firebase/compat";
// import Timestamp = firebase.firestore.Timestamp;


// @ts-ignore
function FirebaseTest({id}) {

    const curGameID = 4644
    const [gameID, setGameID] = useState(null);
    const [curPage, setCurPage] = useState(null);

    // @ts-ignore
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{position: "absolute", bottom: "50%"}} src={logo} width={200} height={200}/>
        </div>
    );
}

export default FirebaseTest;
