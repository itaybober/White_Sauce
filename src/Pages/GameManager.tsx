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


const PAGES = {
     IDEBUG : 0,
     IDSIGNUP : 1,
     IDSTART : 2,
     IDJOIN : 3,
     IDFILTERS : 4,
     IDCOVEN : 5,
     IDGROUP : 6,
     IDSURV : 7,
     IDPUN : 8,
     IDEND : 9
}


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

    const [curPage, setPage] = useState(PAGES.IDSTART)

    let page = <div/>;

    console.log(curPage)

    switch (curPage) {

        case PAGES.IDSTART:
            page = <Start_Page jump={setPage} toPage={PAGES.IDJOIN}/>;
            break;
        case PAGES.IDEBUG:
            // For debug and testing
            page = <Survival_mission jump={setPage} toPage={null}/>;
            break;
        case PAGES.IDJOIN:
            page = <Join_Page jump={setPage} toPage={PAGES.IDFILTERS}/>
            break;
        case PAGES.IDFILTERS:
            page = <Filters jump={setPage} toPage={PAGES.IDCOVEN}/>
            break;
        case PAGES.IDCOVEN:
            page = <CovenantPage jump={setPage} toPage={PAGES.IDSURV}/>
            break;
        case PAGES.IDGROUP:
            page = <GroupMission jump={setPage} toPage={PAGES.IDEND}/>
            break;
        case PAGES.IDSURV:
            page = <Survival_mission jump={setPage} toPage={PAGES.IDPUN}/>
            break;
        case PAGES.IDPUN:
            page = <Punishment jump={setPage} toPage={PAGES.IDGROUP}/>
            break;
        case PAGES.IDEND:
            page = <EndingPage jump={setPage}/>
            break;
    }


    return(page)

}


export default GameManager