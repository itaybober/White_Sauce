import {useState} from "react";
import Start_Page from "./Start_Page";
import Join_Page from "./Join_Page";
import Filters from "./Filters";
import Theme_page, {ThemePage} from "./Theme_page";
import Background from "../Components/Background";
import CovenantPage from "./CovenantPage";
import Survival_mission from "./Survival_mission"
import GroupMission from "./GroupMission";
import Punishment from "./Punishment_page";
import EndingPage from "./EndingPage";
import Chwazi from "../Components/Chwazi";



const IDEBUG = 0;
const IDSIGNUP = 1;
const IDSTART = 2;
const IDJOIN = 3;
const IDFILTERS = 4;
const IDCOVEN = 5;
const IDGROUP = 6;
const IDSURV = 7;
const IDPUN = 8;
const IDEND = 9;

/*
    0 - debug

    1 - sign up
    2 - start page
    3 - join page
    4 - filters
    5 - covenant


    // Firebase the relevant page??
    6 - group
    7 - survival
    8 - punishment
    //


    9 - Ending


 */
function GameManager() {

    const [curPage, setPage] = useState(IDEND)

    let page;

    console.log(curPage)

    switch (curPage) {

        case IDEBUG:
            // For debug and testing
            page = <Survival_mission jump={setPage} toPage={null}/>;
            break;
        case IDSTART:
            page = <Start_Page jump={setPage} toPage={IDJOIN}/>;
            break;
        case IDJOIN:
            page = <Join_Page jump={setPage} toPage={IDFILTERS}/>
            break;
        case IDFILTERS:
            page = <Filters jump={setPage} toPage={IDCOVEN}/>
            break;
        case IDCOVEN:
            page = <CovenantPage jump={setPage} toPage={IDSURV}/>
            break;
        case IDGROUP:
            page = <GroupMission jump={setPage} toPage={IDEND}/>
            break;
        case IDSURV:
            page = <Survival_mission jump={setPage} toPage={IDPUN}/>
            break;
        case IDPUN:
            page = <Punishment jump={setPage} toPage={IDGROUP}/>
            break;
        case IDEND:
            page = <EndingPage jump={setPage} toPage={IDSTART}/>
            break;
    }


    return(
        <div style={{height: "100vh", width : "100vw"}}>
            {page}
        </div>

    )

}


export default GameManager