


import {collection, doc, setDoc, getDoc, DocumentReference, DocumentData, updateDoc, arrayUnion, Timestamp} from "firebase/firestore";
import {db} from "../config/firebase";
import {PAGES} from "../Pages/GameManager";
// import firebase from "firebase/compat";
// import DocumentReference = firebase.firestore.DocumentReference;


/**
 * Represents a single mission with all of its relevant information and capabilities
 */
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
        title = "", description = "", tags = [], type = "", extras = [],
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
    public survivalPointSystem(player: Player, time: number) {
        // calculate number of points to add to a player
        player._points += 1;
        return;
    }

    public groupPointSystem(player: Player, time: number) {
        // calculate number of points to add to a player
        player._points += 1;
        return;
    }

    public punishmentPointSystem(player: Player, time: number) {
        // calculate number of points to add to a player
        player._points += 1;
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
        const missionData = Mission.getMissionData(mission)
        try {
            await setDoc(doc(db, "Missions", mission._title), missionData);
            console.log("Mission added to Firestore");
        } catch (error) {
            console.error("Error adding mission to Firestore:", error);
        }
    }

    public static getMissionData(mission: Mission){
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
}

/**
 * Represents a player with all of their relevant information and capabilities
 */
class Player{
    public _name: string  ;
    public _playerID: string;
    public _points: number;
    public _curPage: number;
    public _gameRef: DocumentReference;
    public _playerRef: DocumentReference;


    constructor(UID: string = "null", name: string | null = "", gameRef: DocumentReference = doc(db, "Games", "0000")) {
        if (name === null){
            this._name = "";
        } else {
            this._name = name;
        }
        this._playerID = UID;
        this._points = 0;
        this._curPage = PAGES.START;
        this._playerRef = doc(db, "Active_Players", UID);
        this._gameRef = gameRef;
    }

    public async setName(name: string) {
        await updateDoc(this._playerRef, {name: name})
    }

    public async setCurPage(newPage: number) {
        await updateDoc(this._playerRef, {curPage: newPage})
        // setDoc(this._playerRef, {curPage: number}, { merge: true })
    }

    public setGameRef(gameRef:DocumentReference){
        setDoc(this._playerRef, {gameReference: gameRef}, { merge: true })
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
    public async addPlayerToFirestore(){
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

    public static getPlayerDataFromVariable(player: Player){
        const playerData = {
            name: player._name,
            playerID: player._playerID,
            points: player._points,
            curPage: player._curPage,
            playerReference: player._playerRef,
            gameReference: player._gameRef,
            createdAt: Timestamp.now()
        };
        return playerData;
    }




    public getUpdate(data: DocumentData ) {
        this._name = data.name;
        this._playerID = data.playerID;
        this._points = data.points;
        this._curPage = data.curPage;
        this._playerRef = data.playerReference;
        this._gameRef = data.gameReference
    }
}

class Game{
    public _id: string;
    public _filters: string[];
    public _players: DocumentReference[];
    public _curMission: Mission;
    public _gameRef;

    constructor() {
        this._id = Game.generateRandomNumber().toString();
        this._filters = []
        this._players = [];
        this._curMission = new Mission()
        this._gameRef = doc(db, "Games", this._id);
    }

    /**
     * this function gets a single Player object and time (you should call this
     * function from survival / group / punishment page) this function calls the
     * relevant function that will update the player's points.
     * @param player
     * @param time
     */
    public addPointsSinglePlayer(player: Player, time: number) {
        if (this._curMission._type === "survival") {
            this._curMission.survivalPointSystem(player,time);
        }
        else if (this._curMission._type === "group") {
            this._curMission.groupPointSystem(player, time);
            }
         else if (this._curMission._type === "punishment") {
            this._curMission.punishmentPointSystem(player, time);
            }
        }

    /**
     * Adds a single player reference to the list of players in a game
     * @param player
     */
    public async addPlayer(playerRef: DocumentReference){
        await updateDoc(this._gameRef, {players: arrayUnion(playerRef)})
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

    public static getGameData(game: Game){
        const gameData = {
            id: game._id,
            players: game._players.map((player) => (player)),
            curMission: Mission.getMissionData(game._curMission),
            filters: game._filters.map((filter) => filter),
            gameReference: game._gameRef,
            createdAt: Timestamp.now(), // Optional: Include a timestamp for when the game was created
        };
        return gameData;
    }

    public getUpdate(data: DocumentData ) {
        this._id = data.id;
        this._players = data.players.map( (player: DocumentReference) => (player));
        this._curMission = data.curMission;
        this._filters = data.filters.map((filter: string) => (filter));
        this._gameRef = data.gameReference;
    }

    public getMissionFromDatabase() {
        if (this._filters[0] === "active") {
            console.log('chosen mission is active!')
        }
        else if (this._filters[0] === "drinks") {
            console.log('chosen mission is drinks!')
        }
        else if (this._filters[0] === "riddles") {
            console.log('chosen mission is riddles!')
        }
        else if (this._filters[0] === "snacks") {
            console.log('chosen mission is snacks!')
        }
    }
}



export {Mission, Player, Game}