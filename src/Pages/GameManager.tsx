import {useState} from "react";
import Start_Page from "./Start_Page";
import Join_Page from "./Join_Page";
import Filters from "./Filters";
import Theme_page, {ThemePage} from "./Theme_page";
import Background from "../Components/Background";
import CovenantPage from "./CovenantPage";
import Survival_mission from "./Survival_mission"
import GroupMission from "./GroupMission";
import Punishment from "./Punishment_Page";
import EndingPage from "./EndingPage";
import Chwazi from "../Components/Chwazi";


const PAGES = {
     DEBUG : 0,
     SIGNUP : 1,
     START : 2,
     JOIN : 3,
     FILTERS : 4,
     COVEN : 5,
     GROUP : 6,
     SURV : 7,
     PUN : 8,
     END : 9
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

    const [curPage, setPage] = useState(PAGES.GROUP)

    let page = <div/>;

    console.log(curPage)

    switch (curPage) {

        case PAGES.DEBUG:
            // For debug and testing
            page = <Survival_mission jump={setPage} toPage={null}/>;
            break;
        case PAGES.START:
            page = <Start_Page jump={setPage} toPage={PAGES.JOIN}/>;
            break;
        case PAGES.JOIN:
            page = <Join_Page jump={setPage} toPage={PAGES.FILTERS}/>
            break;
        case PAGES.FILTERS:
            page = <Filters jump={setPage} toPage={PAGES.COVEN}/>
            break;
        case PAGES.COVEN:
            page = <CovenantPage jump={setPage} toPage={PAGES.SURV}/>
            break;
        case PAGES.GROUP:
            page = <GroupMission jump={setPage} toPage={PAGES.END}/>
            break;
        case PAGES.SURV:
            page = <Survival_mission jump={setPage} toPage={PAGES.PUN}/>
            break;
        case PAGES.PUN:
            page = <Punishment jump={setPage} toPage={PAGES.GROUP}/>
            break;
        case PAGES.END:
            page = <EndingPage jump={setPage} toPage={PAGES.START}/>
            break;
    }


    return(page)

}


export default GameManager