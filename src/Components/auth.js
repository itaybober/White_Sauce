import { auth, googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut, signInAnonymously, updateProfile } from "firebase/auth"
import {useState} from "react";
import {collection} from "firebase/firestore";
import {db} from "../Achsaf_Folder/firebase-config";
import { Player } from "./Classes"

export const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPasswrod] = useState("")
    const singIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err)
        }
    }
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error()
        }
    }
    const logout = async () => {
        try {
            await signOut(auth);
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
            <br/>
            <input placeholder={'password'}
                   type = 'password'
                   onChange={(e) => setPasswrod(e.target.value)}
            />
            <br/>
            <button onClick={singIn} className={"go_button"}>Sign in</button>
            <br/>
            <button onClick={signInWithGoogle} className={"go_button"}>Sing in with Google</button>
            <br/>
            <button onClick={logout} className={"go_button"}>Sign Out</button>
            <button onClick={signInAnonymous} className={"go_button"}>Anonymous sign in</button>
        </div>
    );
};