import { auth, googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth"
import {useState} from "react";

export const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPasswrod] = useState("")
    const singIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error()
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
    return (
        <div>
            <input placeholder="email"
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
        </div>
    );
};