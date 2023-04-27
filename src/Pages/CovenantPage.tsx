



import Chwazi from "../Achsaf_Folder/Chwazi";
import "./CovenantPage.css";


// @ts-ignore
function CovenantPage({jump}) {


    function startGame(){
        // TODO get from firebase
        jump(0);
    }


    return(
        <div id={"CovenantPage_Background"}>
            <h1 id={"CovenantPage_ChwaziContainer"}> Hello its me, ive been wondering if after all these year youd like to meet </h1>
            <div id={"CovenantPage_ChwaziContainer"}>
                <Chwazi/>
            </div>
        </div>
    )
}

export default CovenantPage;