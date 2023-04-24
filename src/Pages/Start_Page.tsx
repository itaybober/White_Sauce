import "./Start_Page.css"
import Button from "@mui/material/Button";
import Background from "../Components/Background";

function Start_Page() {

    return(
        <div id={"StartPage_Background"}>
            <h1 id={"StartPage_Title"}>Which Journey is Yours?</h1>
            <Button id={"StartPage_Button_Start"} >START A CREW</Button>
            <Button id={"StartPage_Button_Join"} >JOIN A CREW</Button>
        </div>
    )
}

export default Start_Page;