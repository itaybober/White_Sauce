import Button from "@mui/material/Button";
import "./Join_Page.css"
import {TextField, Box} from '@mui/material';
import Background from "../Components/Background";
// @ts-ignore
function Join_Page( {jump, toPage} ) {

    // @ts-ignore
    function enterValue(ev) {
        if (ev.key === "Enter"){

            // TODO work based on firebase
            jump(toPage);
            ev.preventDefault();
        }
    }

    return (

        <div id={"JoinPage_Background"}>
            <h1 id={"JoinPage_Title"}>Enter Cypher</h1>
            <TextField id={"JoinPage_Input"} onKeyDown={enterValue} inputProps={{min: 0, style: { textAlign: 'center' }}}
               placeholder={"PIN"} sx={{ textAlign: 'center', position:'relative', top:'50%' }}  variant="outlined" />
        </div>
    )
}

export default Join_Page