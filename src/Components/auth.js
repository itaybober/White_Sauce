import { auth, googleProvider} from "../config/firebase";
import { signInWithPopup, signOut, signInAnonymously, updateProfile } from "firebase/auth"
import {useState} from "react";
import {collection} from "firebase/firestore";
import {db} from "../Achsaf_Folder/firebase-config";
import { Player } from "./Classes"

export const Auth = () => {
    const [email, setEmail] = useState("")

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error()
        }
    }

    const signInAnonymous = async () => {
        try {

            await signInAnonymously(auth);
            updateProfile(auth.currentUser, {displayName: email})
        } catch (err) {
            console.error()
        }
    }

    /**
     * this function creates a new player from player class (in page classes)
     * @returns {newPlayer}
     */
    function createNewPlayer() {
        let newPlayer = new Player(auth.currentUser.uid);
        return newPlayer;
    }

    /**
     * this function is called when a user authenticate.
     * it will call 'createNewPlayer' function to add the player to the firestore Players darabase.
     */
    function addPlayerToFirestore() {

    }

    return (
        <div>
            <input placeholder="Enter your alias pussy"
                   onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={signInAnonymous} className={"go_button"}>Anonymous sign in</button>
            <br/>
            <button onClick={signInWithGoogle} className={"go_button"}>Sing in with Google</button>
            <br/>
        </div>
    );
};