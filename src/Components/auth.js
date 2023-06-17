import { auth, googleProvider} from "../config/firebase";
import { signInWithPopup, signOut, signInAnonymously, updateProfile } from "firebase/auth"
import {useState} from "react";
import {collection} from "firebase/firestore";
import {db} from "../Achsaf_Folder/firebase-config";
import { Player } from "./Classes"
import Input from '@mui/material/Input';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

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
            await updateProfile(auth.currentUser, {displayName: email})
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
        <Container sx={{display: "flex", flexFlow:"column",justifyContent:"space-evenly",alignItems:"center",
            gap:6,padding: 2,position:"relative",textJustify:"auto" }

        }>
            <Input placeholder="Enter your warrior name"
                   onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={signInAnonymous} >sign in</Button>

            {/*<Button onClick={signInWithGoogle}>Sing in with Google</Button>*/}

        </Container>
    );
};