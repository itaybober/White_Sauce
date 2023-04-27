import Button from "@mui/material/Button";
import "./Join_Page.css"
import {TextField, Box} from '@mui/material';
import Background from "../Components/Background";
// @ts-ignore
function Join_Page( {jump} ) {

    // @ts-ignore
    function enterValue(ev) {
        if (ev.key === "Enter"){

            // TODO work based on firebase
            jump(4);
            ev.preventDefault();
        }
    }


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                // padding: 16,
            }}
        >
            <div></div>
            <h1 id={"JoinPage_Title"}>Enter Cypher</h1>
            <TextField onKeyDown={enterValue} inputProps={{min: 0, style: { textAlign: 'center' }}}  placeholder={"PIN"}   variant="outlined" />
        </Box>

        // <div id={"JoinPage_Background"}>
        //     <h1 id={"JoinPage_Title"}>Enter Cypher</h1>
        //     <TextField id={"JoinPage_Input"} inputProps={{min: 0, style: { textAlign: 'center' }}} placeholder={"PIN"}  sx={{ textAlign: 'center' }}  variant="outlined" />
        // </div>
    )
}

export default Join_Page