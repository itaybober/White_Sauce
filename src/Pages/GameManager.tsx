import {useState, useEffect} from "react";
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
import { db, auth } from "../config/firebase"
import FirebaseTest from "../Achsaf_Folder/FirebaseTest";
import Main_Page from "./Main_Page";
import {Player} from "../Components/Classes";


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
     END : 9,
     AUTH: 10
}

/**
 *
 *
 * GameManager:
 *      Next Mission
 *              function who gets filters from the current game and returns the next game from firebase
 *
 *      check sign-in:
 *              if user logged in => connect to relevant game
 *              if user not logged in => login process and start a new game
 *
 *
 *
 * Pages:
 *
 *      Leader Board Component --
 *      A component that receives an array of Player objects and displays all their relevant information according
 *      to who is in the lead
 *
 *      Relevant information --
 *      Each mission component will receive a mission object (defined in ./Components/Classes).
 *      This object will hold all the relevant information to be displayed (i.e. name, description, points, etc)
 *      Use the object information to fill in all the relevant fields for all missions (group,survival,punishment)
 *      If more information is needed you can add it to the class
 *      There is an example of how to use the class where it is defined.
 *
 *      Waiting Pages --
 *      We need a page for people to see while they are waiting for things to happen:
 *          - Connected page: a page that will show everyone who is connected to the current page, will remain this
 *                            on this page until everyone has placed a finger on the covenant page
 *                            Will receive an array of Player objects that have already joined
 *
 *          - Non-punishment page: a page for people to see random stats while they wait for the loser to finish
 *                                 their punishment
 *                                 Will receive an array of all Players in place.
 *
 *
 *      Random filter --
 *      A filter that has a random tag each round
 *
 *      Missions DataBase --
 *      Start filling the mission database, there are two ways of doing this:
 *              1) Directly in the site (we will show you)
 *              2) defining a new mission and adding it to the firebase, there is an example of each of these
 *                 actions in the Mission class definition.
 *
 */

function generateRandomNumber() {
    const min = 1000;
    const max = 9999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
function GameManager() {

    const [curPage, setPage] = useState(PAGES.AUTH)
    const [gameId, setGameId] = useState(0)

    let page = <div/>;




    useEffect(
        () => {
            console.log("currentuser: " + auth.currentUser?.displayName)

            return () => {

                // TODO if user signed in connect to relevant game
                //  else
                //  start a new game
            }
        }
    ,[] );

    switch (curPage) {

        case PAGES.DEBUG:
            // For debug and testing
            // @ts-ignore
            page = <FirebaseTest />;
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
        case PAGES.AUTH:
            page = <Main_Page jump={setPage} toPage={PAGES.START}/>;
            break;
    }


    return(page)

}


export default GameManager