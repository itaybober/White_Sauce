import { useEffect } from 'react';
import { db } from './firebase-config';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import {Game} from "../Components/Classes"
// import firebase from "firebase/compat";
// import Timestamp = firebase.firestore.Timestamp;




// @ts-ignore
function FirebaseTest( {id}) {







    async function newGame() {
        await setDoc(doc(db, 'Games', 'ID: ' + id.toString()), {
            ID: id.toString(),
            Players: 'CA',
            country: 'USA',
        });
    }
    const game = new Game();

    useEffect( () => {
        return () => {
            const game = new Game()
            Game.addGameToFirestore(game)
        }
    },[])


    // addGameToFirestore(game)
    return <div></div>;
}

export default FirebaseTest;
