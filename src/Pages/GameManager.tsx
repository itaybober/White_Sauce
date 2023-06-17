import React, {useState, useEffect} from "react";
import Start_Page from "./Start_Page";
import Join_Page from "./Join_Page";
import Filters from "./Filters";
import CovenantPage from "./CovenantPage";
import Survival_mission from "./Survival_mission"
import GroupMission from "./GroupMission";
import Punishment from "./Punishment_Page";
import EndingPage from "./EndingPage";
import { db, auth } from "../config/firebase"
import Main_Page from "./Main_Page";
import {Game, Player} from "../Components/Classes";
import { onAuthStateChanged } from "firebase/auth";
import {doc, getDoc, onSnapshot } from "firebase/firestore";
import logo from "./step-1_logo.svg";
import PointsPage from "./PointsPage";
import galiLogo from "./images/gali_test_logo.png";



export const PAGES = {
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
    AUTH: 10,
    WAIT: 11,
    POINTS:12
}

/**
 *
 * GameManager:
 *      Next Mission
 *              function who gets filters from the current game and returns the next game from firebase*
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
 *      Filter --
 *      Filter page will recieve an array of strings to update all the chosen filters
 *
 *      Missions DataBase --
 *      Start filling the mission database, there are two ways of doing this:
 *              1) Directly in the site (we will show you)
 *              2) defining a new mission and adding it to the firebase, there is an example of each of these
 *                 actions in the Mission class definition.
 *
 */

function GameManager() {

    const [curPage, setPage] = useState(PAGES.WAIT)
    const [curGame, setCurGame] = useState<Game>(new Game())
    const [curPlayer , setCurPlayer] = useState<Player>()

    let page = <div/>;

    function logOut() {
        auth.signOut()
            .then(() => {
                curPlayer?.setCurPage(PAGES.AUTH)
                if (curPlayer) {
                    curPlayer.removePlayerFromFireBase()
                }
                if (curGame && curPlayer) {
                    curGame.removePlayerFromFirebase(curPlayer._playerRef)
                }
                console.log('User logged out successfully');
            })
            .catch((error) => {
                console.log('Error logging out:', error);
            });
    }

    // Updates the curPlayer instance every time information in the firestore is changed
    if (curPlayer && curPlayer._playerRef) {
        onSnapshot(curPlayer._playerRef, (snapshot) => {
            const data = snapshot.data()
            if (typeof data !== 'undefined') {
                curPlayer.getUpdate(data)
            }
            setPage(curPlayer._curPage)
        })
    }

    // Updates the curGame instance every time information in the firestore is changed
    if (curGame && curGame._gameRef) {
        onSnapshot(curGame._gameRef, (snapshot) => {
            const data = snapshot.data()
            if (typeof data !== 'undefined') {
                curGame.getUpdate(data)
            }
        })
    }

    // For debugging, will run whatever command given if any key is pressed
    useEffect(() => {
        function handleKeyDown(event: { key: any; }) {

        }

        // Add the event listener when the component mounts
        window.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // updates the user's display name
    onAuthStateChanged(auth, () => {
        if(curPlayer && auth.currentUser && auth.currentUser.displayName) {
            curPlayer.setName(auth.currentUser.displayName)
            // console.log("auth state change")
        }
    })

    // After login creates a player instance if none exists or connects to firebase if it does.
    useEffect(() => {
        // console.log("login attempt")
        const unsubscribe = auth.onAuthStateChanged(  (user) => {
            if (user) {
                let curUser;
                const docRef = doc(db, "Active_Players", user.uid)
                getDoc(docRef)
                    .then((docSnapshot) => {
                        curUser = new Player(user.uid, user.displayName)
                        if (docSnapshot.exists()) {
                            console.log("Player exists");
                        } else {
                            Player.addPlayerToFirestore(curUser);
                            if (curPlayer){
                                setPage(curPlayer._curPage)
                            }
                            console.log("Creating new player: " + curUser._name);
                        }
                        setCurPlayer(curUser)
                    })
                    .catch((error) => {console.log("Couldn't get User doc: " + error)})
            } else {
                console.log('User is signed out');
                setPage(PAGES.AUTH);
            }
        });

        // Clean up the listener when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);

    // console.log(curPlayer)

    switch (curPage) {

        case PAGES.DEBUG:
            // For debug and testing
            // @ts-ignore
            // page = <FirebaseTest />;
            break;
        case PAGES.START:
            page = <Start_Page curPlayer={curPlayer}/>;
            break;
        case PAGES.JOIN:
            page = <Join_Page curPlayer={curPlayer} curGame={curGame}/>
            break;
        case PAGES.FILTERS:
            page = <Filters curPlayer={curPlayer} setCurGame={setCurGame}/>
            break;
        case PAGES.COVEN:
            page = <CovenantPage curPlayer={curPlayer} curGame={curGame}/>
            break;
        case PAGES.GROUP:
            page = <GroupMission curPlayer={curPlayer} curGame={curGame}/>
            break;
        case PAGES.SURV:
            page = <Survival_mission  curPlayer={curPlayer} curGame={curGame}/>
            break;
        case PAGES.PUN:
            page = <Punishment curPlayer={curPlayer} curGame={curGame}/>
            break;
        case PAGES.END:
            page = <EndingPage jump={setPage} toPage={PAGES.START}/>
            break;
        case PAGES.AUTH:
            page = <Main_Page/>;
            break;
        case PAGES.WAIT:
            page = <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{position: "absolute", bottom: "50%"}} src={logo} width={200} height={200}/>
            </div>
            break;
        case PAGES.POINTS:
            page = <PointsPage curPlayer={curPlayer} curGame={curGame}/>
            break;
    }


    return(
        <div>
            <button onClick={logOut}> X </button>
            <br/>
            <br/>
            <img src={logo} width={103} height={85}/>
            {page}
        </div>

    )

}


export default GameManager