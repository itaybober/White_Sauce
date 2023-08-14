import { auth } from "../config/firebase";
import { signInAnonymously, updateProfile } from "firebase/auth"
import {useState} from "react";
import Input from '@mui/material/Input';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export const Auth = () => {
    const [email, setEmail] = useState("")

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Call your function here
            signInAnonymous();
        }
    };

    const signInAnonymous = async () => {
        try {
            await signInAnonymously(auth);
            await updateProfile(auth.currentUser, {displayName: email})
        } catch (err) {
            console.error()
        }
    }


    return (
        <Container sx={{display: "flex", flexFlow:"column",justifyContent:"space-evenly",alignItems:"center",
            gap: "30px",position:"relative",textJustify:"auto", marginTop: "30px" }

        }>
            <Input placeholder="Enter your warrior name"
                   onChange={(e) => setEmail(e.target.value)}
                   sx={{fontSize: "22px",
                        color: "white"}}
                   inputProps={{
                       maxLength: 12 // Set the maximum length to 12 characters
                   }}
                   onKeyPress={handleKeyPress}
            />
            <Button  onClick={signInAnonymous}
                     variant={"outlined"}
                     sx={{
                         background: "#D1B067",
                         color: "#282c34",
                         padding: "4px 45px",
                         fontSize: "22px",
                         textTransform: "none"
                     }}
            >Embrace the quest
              </Button>


        </Container>
    );
};