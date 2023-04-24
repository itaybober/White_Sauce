import {useState} from "react";
import Start_Page from "./Start_Page";
import Join_Page from "./Join_Page";
import Filters from "./Filters";
import Theme_page, {ThemePage} from "./Theme_page";
import Background from "../Components/Background";
import CovenantPage from "./CovenantPage";


/*
    0 - debug

    1 - sign up
    2 - start page
    3 - join page
    4 - filters
    5 - covenant


    // Firebase the relevant page??
    6 - survival
    7 - group
    8 - punishment
    //


    9 - Ending


 */
function GameManager() {

    const [curPage, setPage] = useState(0)


    let page;

    console.log(curPage)

    switch (curPage) {

        case 0:
            page = <CovenantPage jump={setPage}/>
            break

        case 2:
            // @ts-ignore
            page = <Start_Page jump={setPage}/>;
            break;
        case 3:
            page = <Join_Page jump={setPage}/>
            break;
        case 4:
            page = <Filters jump={setPage}/>
            break;
        case 5:
            page = <CovenantPage jump={setPage}/>
            break;

    }


    return(
        <div>
            {page}
        </div>

    )

}


export default GameManager