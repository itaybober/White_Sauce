



import Chwazi from "../Achsaf_Folder/Chwazi";
import "./CovenantPage.css";
import {useState} from 'react';


// TODO determined by number of players in firebase
const NUM_OF_PLAYERS = 1;

// @ts-ignore
function CovenantPage({jump}) {

    const [numFingers, setNumFingers] = useState(0);

    function startGame(){
        // TODO get from firebase
        if (numFingers === NUM_OF_PLAYERS){
            jump(6);
        }
    }


    return(
        <div id={"CovenantPage_Background"}>
            <h1 id={"CovenantPage_ChwaziContainer"}> Hello its me, ive been wondering if after all these year youd like to meet </h1>
            <div onTouchStart={startGame} onTouchEnd={startGame} onTouchMove={startGame} id={"CovenantPage_ChwaziContainer"}>
                <Chwazi setNumFingers={setNumFingers}/>
            </div>
        </div>
    )
}

export default CovenantPage;