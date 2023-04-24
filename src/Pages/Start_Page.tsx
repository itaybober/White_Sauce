import "./Start_Page.css"
import Button from "@mui/material/Button";
import Background from "../Components/Background";

// @ts-ignore
function Start_Page({jump}) {


    function startPage(){
    //     TODO startpage
    //     jump(whatever)
    }
    function joinPage(){
        jump(1);
    }


    return(
        <div id={"StartPage_Background"}>
            <h1 id={"StartPage_Title"}>Which Journey is Yours?</h1>
            <Button onClick={startPage} id={"StartPage_Button_Start"} >START A CREW</Button>
            <Button onClick={joinPage} id={"StartPage_Button_Join"} >JOIN A CREW</Button>
        </div>
    )
}

export default Start_Page;