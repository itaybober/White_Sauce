import firebase from "firebase/app"
import {runTransaction ,collection, doc, setDoc, getDoc,getDocs, DocumentReference, DocumentData, updateDoc, arrayUnion, Timestamp, deleteDoc, arrayRemove, DocumentSnapshot,query, where, orderBy} from "@firebase/firestore";
import {db, storage} from "../config/firebase";
import {PAGES} from "../Pages/GameManager";
import {colors} from "@mui/material";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;
// import firebase from "firebase/compat";
import avatar1 from "../Pages/images/icon/avatar.png"
import {getDownloadURL, listAll, ref} from "firebase/storage";


// import firebase from "firebase/compat";
// import DocumentReference = firebase.firestore.DocumentReference;


/**
 * Represents a single mission with all of its relevant information and capabilities
 */


function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
}



class Mission {
    public _title: string;
    public _description: string;
    public _tags: string[];
    public _type: string; // group, survival, punishment
    public _extras: string[];
    public _minNumOfPlayers: number;
    public _maxNumOfPlayers: number;


    /**
     * A constructor for building a new mission. Each parameter will be saved into the new mission object.
     *
     * This functions like __init__ in python
     *
     * ex.      let newMission = new Mission(
     *              "Rescue Mission",                             // Title
     *              "Rescue the hostages from the enemy base.",    // Description
     *              ["rescue", "action", "adventure"],             // Tags
     *              "group",                                      // Type
     *              ["night vision goggles", "rope"],              // Extras
     *              3,                                            // Minimum number of players
     *              6                                             // Maximum number of players
     *             );
     *
     * @param title
     * @param description
     * @param tags
     * @param type
     * @param extras
     * @param minNumOfPlayers
     * @param maxNumOfPlayers
     * @param filters
     */
    constructor(
        title = "", description = "", tags = [""], type = "", extras = [],
        minNumOfPlayers = -1, maxNumOfPlayers = -1) {

        this._title = title;
        this._description = description;
        this._tags = tags;
        this._type = type;
        this._extras = extras;
        this._minNumOfPlayers = minNumOfPlayers;
        this._maxNumOfPlayers = maxNumOfPlayers;
    }


    /**
     * these 3 functions will get a Player object, and update his
     * points attribute
     *
     */
    public async survivalPointSystem(player: Player, time: number, succeed = true) {
        // calculate number of points to add to a player
        if (succeed) {
            if (time < 15) {
                const newTotal = player._points + 800;
                await player.setPoints(newTotal);
            } else if (time >= 15 && time < 30) {
                const newTotal = player._points + 500;
                await player.setPoints(newTotal);
            } else {
                const newTotal = player._points + 300;
                await player.setPoints(newTotal);
            }
        }
        return;
    }

    public groupPointSystem(game: Game, time: number, succeed:boolean = true) {
        // calculate number of points to add to a player
        if (succeed) {
            game.updateAllPlayerPoints(500);
            }
        return;
    }


    public punishmentPointSystem(player: Player, time: number, succeed = true) {
        // calculate number of points to add to a player
        if (succeed) {
            if (time < 15) {
                const newTotal = player._points + 500;
                player.setPoints(newTotal);
            } else if (time >= 15 && time < 30) {
                const newTotal = player._points + 250;
                player.setPoints(newTotal);
            } else {
                const newTotal = player._points + 100;
                player.setPoints(newTotal);
            }
        }
        return;
        }

        public secretPointSystem(player: Player, succeed = true) {
            if (succeed) {
                const newTotal = player._points + 1500;
                player.setPoints(newTotal);
            }
            return;
        }



    /**
     * A method for adding the mission to firestore.
     * The signature looks like this:
     *
     *       let myMission = new Mission(PARAMETERS GO HERE)
     *
     *       myMission.addMissionToFireStore()
     *
     * "myMission" is an instance of the Mission class
     */
    public async addMissionToFireStore() {
        Mission.addMissionToFirestore(this);
    }

    /**
     * static method for adding missions to the firestore,
     * The signature looks like this:
     *
     *      let myMission = new Mission(PARAMETERS GO HERE)
     *
     *      Mission.addMissionToFireStore(myMission)
     *
     * "myMission" is an instance of the Mission class
     * "Mission" is the class itself
     * @param mission
     */
    static async addMissionToFirestore(mission: Mission): Promise<void> {
        const missionData = Mission.getMissionDataFromVariable(mission)
        try {
            mission._tags.map( async (tag) => {
                await setDoc(doc(db, "Missions", tag, tag, mission._title), missionData);
            })
            console.log("Mission added to Firestore");
        } catch (error) {
            console.error("Error adding mission to Firestore:", error);
        }
    }


    public static getMissionObject(data: { title: string | undefined; description: string | undefined; tags: never[] | undefined; type: string | undefined; extras: never[] | undefined; minNumOfPlayers: number | undefined; maxNumOfPlayers: number | undefined; }){
        return new Mission(data.title, data.description, data.tags, data.type, data.extras, data.minNumOfPlayers, data.maxNumOfPlayers)
    }
    //

    public static getMissionData(mission: Mission) {
        const missionData = {
            title: mission._title,
            description: mission._description,
            tags: mission._tags,
            type: mission._type,
            extras: mission._extras,
            minNumOfPlayers: mission._minNumOfPlayers,
            maxNumOfPlayers: mission._maxNumOfPlayers,
        };
        return missionData;
    }

    public static getMissionDataFromVariable(mission: Mission) {
        const playerData = {
            title: mission._title,
            description: mission._description,
            tags: mission._tags,
            type: mission._type,
            extras: mission._extras,
            minNumOfPlayers: mission._minNumOfPlayers,
            maxNumOfPlayers: mission._maxNumOfPlayers
        };
        return playerData;
    }
}

/**
 * Represents a player with all of their relevant information and capabilities
 */
class Player {
    public _name: string;
    public _playerID: string;
    public _points: number;
    public _curPage: number;
    public _gameRef: DocumentReference;
    public _playerRef: DocumentReference;
    public _playerColor: string;
    public _secretMission: DocumentReference | null;
    public _avatar: string;
    public _avatarRef: string


    constructor(UID: string = "null", name: string | null = "", gameRef: DocumentReference = doc(db, "Games", "0000")) {
        if (name === null) {
            this._name = "";
        } else {
            this._name = name;
        }
        this._playerID = UID;
        this._points = 0;
        this._curPage = PAGES.START;
        this._playerRef = doc(db, "Active_Players", UID);
        this._gameRef = gameRef;
        this._playerColor= '#60a9a2';
        this._secretMission = null;
        this._avatar="avatar"
        this._avatarRef="avatarRef"
    }

    public async setName(name: string) {
        await updateDoc(this._playerRef, {name: name})
    }

    public async setCurPage(newPage: number) {
        await updateDoc(this._playerRef, {curPage: newPage})
        // setDoc(this._playerRef, {curPage: number}, { merge: true })
    }

    public setGameRef(gameRef: DocumentReference) {
        setDoc(this._playerRef, {gameReference: gameRef}, {merge: true})
    }

    public setSecretMission(data: DocumentData) {
        setDoc(this._playerRef, {secretMission: data}, {merge: true})
    }

    public setPoints(newTotal: number) {
        setDoc(this._playerRef, {points: newTotal}, {merge: true})
    }


    /**
     * A method for adding the player to firestore.
     * The signature looks like this:
     *
     *       let newPlayer = new Player(PARAMETERS GO HERE)
     *
     *       newPlayer.addPlayerToFireStore()
     *
     * "newPlayer" is an instance of the Player class
     */
    public async addPlayerToFirestore() {
        Player.addPlayerToFirestore(this);
    }

    /**
     * static method for adding players to the firestore,
     * The signature looks like this:
     *
     *      let newPlayer = new Player(PARAMETERS GO HERE)
     *
     *      Player.addPlayerToFireStore(newPlayer)
     *
     * "newPlayer" is an instance of the Player class
     * "Player" is the class itself
     * @param player
     */

    static async addPlayerToFirestore(player: Player): Promise<void> {
        const playerData = Player.getPlayerDataFromVariable(player);
        try {
            await setDoc(player._playerRef, playerData);
            console.log("Player added to Firestore");
        } catch (error) {
            console.error("Error adding player to Firestore:", error);
        }
    }

    public static getPlayerDataFromVariable(player: Player) {
        const playerData = {
            name: player._name,
            playerID: player._playerID,
            points: player._points,
            curPage: player._curPage,
            playerReference: player._playerRef,
            gameReference: player._gameRef,
            createdAt: Timestamp.now(),
            secretMission: player._secretMission,
            avatar: player._avatar,
            avatarRef: player._avatarRef
        };
        return playerData;
    }

    public async getSecretMissionFromDatabase() {
        const missions_ref = collection(db, "Missions", "Secret", "Secret")
        const ourMissions = await getDocs(missions_ref)
        const ourMission = ourMissions.docs[getRandomNumber(ourMissions.docs.length)]
        await this.setSecretMission(ourMission.data())
    }

    public getUpdate(data: DocumentData) {
        this._name = data.name;
        this._playerID = data.playerID;
        this._points = data.points;
        this._curPage = data.curPage;
        this._playerRef = data.playerReference;
        this._gameRef = data.gameReference;
        this._secretMission = data.secretMission;
        this._avatar=data.avatar
        this._avatarRef=data.avatarRef
    }

    public removePlayerFromFireBase() {
        const playerRef = this._playerRef
        getDoc(playerRef)
            .then(async (docSnapshot) => {
                if (docSnapshot.exists()) {
                    await deleteDoc(playerRef)
                    console.log("Removed player: " + this._name)
                } else {
                    console.log("No such Player in FireBase")
                }
            })
            .catch((error) => {
                console.error('Error getting document:', error);
            })
    }
}

class Game {
    public _id: string;
    public _filters: string[];
    public _players: DocumentReference[];
    public _curMission: Mission;
    public _gameRef;
    public _ready: number;
    public _done: number;

    constructor() {
        this._id = Game.generateRandomNumber().toString();
        this._filters = [];
        this._players = [];
        this._curMission = new Mission();
        this._gameRef = doc(db, "Games", this._id);
        this._ready = 0;
        this._done = 0;
    }

    /**
     * this function gets a single Player object and time (you should call this
     * function from survival / group / punishment page) this function calls the
     * relevant function that will update the player's points.
     * @param player
     * @param game
     * @param time
     * @param type
     * @param succeed
     */
    public addPointsSinglePlayer(player: Player, game: Game, time: number, type: string, succeed = true) {
        console.log("point system trigger")
        if (type === "Survival") {
            this._curMission.survivalPointSystem(player, time);
        } else if (type === "Group") {
            this._curMission.groupPointSystem(game, time);
        } else if (type === "Punishment") {
            this._curMission.punishmentPointSystem(player, time);
        }
        else if (type === "Secret") {
            this._curMission.secretPointSystem(player, succeed);
        }
        console.log("mission type: ", type)
    }

    /**
     * Adds a single player reference to the list of players in a game
     * @param player
     */
    public async addPlayer(playerRef: DocumentReference) {
        await updateDoc(this._gameRef, {players: arrayUnion(playerRef)})
    }

    /**
     * Increases ready by one. Made for synchronization of pages
     */
    public async incrementReady() {
        await runTransaction(db, async (transaction) => {
            const game = await transaction.get(this._gameRef);
            if (game.exists()) {
                const increment = game.data().ready + 1;
                transaction.update(this._gameRef, {ready: increment});
            }
        });
        // await updateDoc(this._gameRef, {
        //     ready: FieldValue.increment(1)
        // });
        // await updateDoc(this._gameRef, FieldValue.increment(1))
    }




    /**
     * Increases done by one. Made for synchronization of pages
     */
    public async incrementDone() {
        await runTransaction(db, async (transaction) => {
            const game = await transaction.get(this._gameRef);
            if (game.exists()) {
                const increment = game.data().done + 1;
                await transaction.update(this._gameRef, {done: increment});
            }
        });

        // await updateDoc(this._gameRef, {done: this._done + 1})
    }

    /**
     * Decreases ready by one. Made for synchronization of pages
     */
    public async decrementReady() {
        await runTransaction(db, async (transaction) => {
            const game = await transaction.get(this._gameRef);
            if (game.exists()) {
                let decrement = game.data().ready - 1;
                if (decrement < 0)
                    decrement = 0
                transaction.update(this._gameRef, {ready: decrement});
            }
        });
        // await updateDoc(this._gameRef, {ready: this._ready - 1})
    }

    /**
     * Decreases done by one. Made for synchronization of pages
     */
    public async decrementDone() {
        await runTransaction(db, async (transaction) => {
            const game = await transaction.get(this._gameRef);
            if (game.exists()) {
                let decrement = game.data().done - 1;
                if (decrement < 0)
                    decrement = 0
                transaction.update(this._gameRef, {done: decrement});
            }
        });
        // await updateDoc(this._gameRef, {done: this._done - 1})
    }

    /**
     * Sets ready to be whatever the given parameter is.
     * @param newReady
     */

    public async setReady(newReady: number){
        await updateDoc(this._gameRef, {ready: newReady})
    }

    /**
     * Sets done to be whatever the given parameter is.
     * @param newDone
     */

    public async setDone(newDone: number){
        await updateDoc(this._gameRef, {done: newDone})
    }

    /**
     * Generates a random four digit number
     */
    static generateRandomNumber() {
        const min = 1000;
        const max = 9999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * A method for adding the game to firestore.
     */
    public async addGameToFirestore() {
        const gameData = Game.getGameData(this)
        try {
            await setDoc(this._gameRef, gameData);
            console.log('Game added to Firestore with ID:', this._id);
        } catch (error) {
            console.error('Error adding game to Firestore:', error);
        }
    }

    public async setFilters(filters: string[]) {
        try {
            await updateDoc(this._gameRef, {filters: arrayUnion(filters)});
            console.log("Filters added to Firestore")
        } catch (err) {
            console.error("ERROR: filters did NOT added to Firestore:", err);
        }
    }

    public static getGameData(game: Game) {
        const gameData = {
            id: game._id,
            players: game._players.map((player) => (player)),
            curMission: Mission.getMissionDataFromVariable(game._curMission),
            filters: game._filters.map((filter) => filter),
            gameReference: game._gameRef,
            ready: game._ready,
            done: game._done,
            createdAt: Timestamp.now(), // Optional: Include a timestamp for when the game was created
        };
        return gameData;
    }


    public async updateAllPlayersPages(nextPage: any) {
        // console.log("game players:")
        console.log(this._players)
        for (const playerRef of this._players) {
            await updateDoc(playerRef, {curPage: nextPage})
        }
    }

    public async updateAllPlayerPoints(points: number) {
        for (const playerRef of this._players) {
            await getDoc(playerRef).then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    //@ts-ignore
                    points = docSnapshot.data().points;
                }
            })
            await updateDoc(playerRef, {points: 500 + points})
        }
    }


    public getUpdate(data: DocumentData) {
        this._id = data.id;
        this._players = data.players.map((player: DocumentReference) => (player));
        this._curMission = new Mission(data.curMission);
        this._players = data.players.map((player: DocumentReference) => (player));
        this._curMission = Mission.getMissionObject(data.curMission);
        this._filters = data.filters.map((filter: string) => (filter));
        this._gameRef = data.gameReference;
        this._ready = data.ready;
        this._done = data.done;
    }

    public removePlayerFromFirebase(playerRef: DocumentReference) {
        getDoc(this._gameRef)
            .then(async (docSnapshot) => {
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data()
                    if (data.players.length === 1) {
                        await deleteDoc(this._gameRef)
                        console.log("Removed game: " + this._id)
                    } else {
                        await updateDoc(this._gameRef, {players: arrayRemove(playerRef)})
                        console.log("Removed player " + playerRef.path + " from game " + this._gameRef.path)
                    }
                } else {
                    console.log("No related game in FireBase")
                }
            })
            .catch((error) => {
                console.error('Error getting document:', error);
            })
    }

    public async setCurMission(data: DocumentData | undefined) {
        console.log("Data:" + data)
        await updateDoc(this._gameRef, {curMission: data})
        // await updateDoc(this._gameRef, {curMission: Mission.getMissionDataFromVariable(newMission)})
    }

    public async getRandomMissionFromDatabase( type : string) {
        const ourFilter = this._filters[getRandomNumber(this._filters.length)]
        const missions_ref = collection(db, "Missions", ourFilter, ourFilter)
        const q = query(missions_ref, where("type", "==", type));
        const ourMissions = await getDocs(q)
        const ourMission = ourMissions.docs[getRandomNumber(ourMissions.docs.length)]
        await this.setCurMission(ourMission.data())
    }

    public async getSecretMissionsFromDatabase() {
        this._players.map( (playerRef) => {
            let player = new Player()
            player._playerRef = playerRef
            player.getSecretMissionFromDatabase()
        } )
    }

    public async getPunishmentFromDataBase() {
        const missions_ref = collection(db, "Missions", "Punishment", "Punishment")
        const ourMissions = await getDocs(missions_ref)
        const ourMission = ourMissions.docs[getRandomNumber(ourMissions.docs.length)]
        await this.setCurMission(ourMission.data())
    }


    //A function that assigns each player an avatar
    //update by maya:
    async getPlayerDataFromRef(playerRef: any):Promise<any>{
        const playerData = await getDoc(playerRef);
        const data : any = await playerData.data();
        return data
    }
    public async assignsAvatar() {
            // const avatars: any[] = []
            // listAll(ref(storage, `avatars/`)).then( (response) => {
            //     response.items.forEach( (item) => {
            //         getDownloadURL(item).then((url) => {
            //             avatars.push(url)
            //             // console.log("url=", url)
            //         })
            //     })
            //
            // })

            // console.log("avatar[0]: ", avatars[0])
            // let avatar_list=["avatar1"]
            let avatarRef_list=["https://firebasestorage.googleapis.com/v0/b/white-sauce.appspot.com/o/avatars%2Favatar.png?alt=media&token=cd3b92cf-c590-45a3-90a8-99003210bd7d",
                "https://firebasestorage.googleapis.com/v0/b/white-sauce.appspot.com/o/avatars%2F1.png?alt=media&token=fcb18d13-9c0b-41ea-83ef-c340cf49a196",
                "https://firebasestorage.googleapis.com/v0/b/white-sauce.appspot.com/o/avatars%2F3.png?alt=media&token=e7cb9eed-3e3f-4220-8859-f7ad2721fc6e",
            "https://firebasestorage.googleapis.com/v0/b/white-sauce.appspot.com/o/avatars%2F4.png?alt=media&token=875a5bb4-db87-4e10-a3bd-33e3e45d07b3",
            "https://firebasestorage.googleapis.com/v0/b/white-sauce.appspot.com/o/avatars%2F5.png?alt=media&token=800ad5c1-0a01-4eb9-83c4-d4ae4145f708",
            "https://firebasestorage.googleapis.com/v0/b/white-sauce.appspot.com/o/avatars%2F6.png?alt=media&token=53020bfe-e66c-4b4e-9dde-4991b832bfc7",
            "https://firebasestorage.googleapis.com/v0/b/white-sauce.appspot.com/o/avatars%2F7.png?alt=media&token=6b18b590-e242-49e9-8ab1-ca63b12e20c0",
            "https://firebasestorage.googleapis.com/v0/b/white-sauce.appspot.com/o/avatars%2F8.png?alt=media&token=5690b378-580b-4f53-8a1d-b3ba39b45c70",
            "https://firebasestorage.googleapis.com/v0/b/white-sauce.appspot.com/o/avatars%2F9.png?alt=media&token=ec2f95b6-2da3-4c18-8f2c-502e53e7d78b",
            "https://firebasestorage.googleapis.com/v0/b/white-sauce.appspot.com/o/avatars%2Fimage%204.png?alt=media&token=3943d3b8-83e3-4c9c-80ab-c8bdadc00128"]
            let i=0
            for (const playerRef of this._players) {
                // await updateDoc(playerRef, {avatar: avatar_list[i]})
                await updateDoc(playerRef, {avatarRef:avatarRef_list[i] })
                i+=1
        }
    }

    // this function update the order of the players list in the game class by there points


    async winnerListUpdate() {
        try {
            const playersRef = collection(db, 'Games', this._id, 'players');
            const sortedQuery = query(playersRef, orderBy('points'));
            const querySnapshot = await getDocs(sortedQuery);
            // this._players = querySnapshot.docs.map((doc) => ({
            //     id: doc.id,
            //     ...doc.data(),
            // })) as Player[]; // Map the data and set the correct type

            console.log('the sorted data is-', this._players);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }
}
export {Mission, Player, Game}