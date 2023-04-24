import Button from "@mui/material/Button";
import "./Join_Page.css"
import {TextField, Box} from '@mui/material';
import Background from "../Components/Background";
function Join_Page() {

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
            <TextField inputProps={{min: 0, style: { textAlign: 'center' }}}  placeholder={"PIN"}   variant="outlined" />
        </Box>

        // <div id={"JoinPage_Background"}>
        //     <h1 id={"JoinPage_Title"}>Enter Cypher</h1>
        //     <TextField id={"JoinPage_Input"} inputProps={{min: 0, style: { textAlign: 'center' }}} placeholder={"PIN"}  sx={{ textAlign: 'center' }}  variant="outlined" />
        // </div>
    )
}

export default Join_Page