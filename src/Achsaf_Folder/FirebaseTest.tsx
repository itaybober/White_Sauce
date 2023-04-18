
import './FireBaseTest.css';


import { useState } from "react";
import { db } from "./firebase-config";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore"

// TODO for this to work run "npm install firebase" in the terminal



function FirebaseTest() {

    const docRef = doc(db, "DataBase", "Counter");

    const [count, setCount] = useState(0)

    onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
            setCount(docSnap.data().Value);
        }
    });
    async function add() {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await setDoc(docRef, {Value: (docSnap.data().Value + 1)})
        }
    }
    async function sub() {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await setDoc(docRef, {Value: (docSnap.data().Value - 1)})
        }
    }



    return (
        <div id={"container"}>
        <button id={"plus"} className={"bute"} onClick={add}>+</button>
        <span className={"bute"}>{count}</span>
        <button id={"minus"} className={"bute"} onClick={sub}>-</button>
        </div>
    );


}

export default FirebaseTest;