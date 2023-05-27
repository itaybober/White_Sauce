import {useEffect, useState} from 'react';
import {db} from '../config/firebase';
import {doc, setDoc, addDoc, collection} from 'firebase/firestore';
import {Game} from "../Components/Classes"
// import firebase from "firebase/compat";
// import Timestamp = firebase.firestore.Timestamp;


// @ts-ignore
function FirebaseTest({id}) {

    const curGameID = 4644
    const [gameID, setGameID] = useState(null);
    const [curPage, setCurPage] = useState(null);

    // let fetchGame = Game.getGameFromFirestore(curGameID)

    // fetchGame
    //     .then((game) => {
    //         if (game != null) { // @ts-ignore
    //             setGameID(game._id)
    //             // @ts-ignore
    //             setCurPage(game._curPage)
    //         }
    //     })

    // @ts-ignore
    return (
        <div></div>
    );
}

export default FirebaseTest;
