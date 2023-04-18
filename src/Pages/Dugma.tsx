
import * as React from 'react';
import Button from '@mui/material/Button';
import "./Dugma.css"
function Dugma() {

    let comp

    const [condition, setCondition] = React.useState(true)

    if (condition) {
        comp =  <Button onClick={ () => setCondition(false) } variant="contained">Hello </Button>
    } else {
        comp =  <Button onClick={() => setCondition(true)} variant="contained">Goodbye</Button>
    }
    return (
        <div id={"button-dugma"}>
            {comp}
        </div>
    )

}



export default Dugma

