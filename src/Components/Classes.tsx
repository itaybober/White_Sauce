import {collection, doc, setDoc, getDoc} from "firebase/firestore";
import {db} from "../config/firebase";


/**
 * Represents a single mission with all of its relevant information and capabilities
 */
class Mission{
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
     */
    constructor(
        title = "", description = "", tags = [], type = "", extras = [],
        minNumOfPlayers = -1, maxNumOfPlayers = -1 ) {
        this._title = title;
        this._description = description;
        this._tags = tags;
        this._type = type;
        this._extras = extras;
        this._minNumOfPlayers = minNumOfPlayers;
        this._maxNumOfPlayers = maxNumOfPlayers;
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
    public async addMissionToFireStore(){
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
        const missionData = {
            title: mission._title,
            description: mission._description,
            tags: mission._tags,
            type: mission._type,
            extras: mission._extras,
            minNumOfPlayers: mission._minNumOfPlayers,
            maxNumOfPlayers: mission._maxNumOfPlayers,
        };

        try {
            await setDoc(doc(db, "Missions", mission._title), missionData);
            console.log("Mission added to Firestore");
        } catch (error) {
            console.error("Error adding mission to Firestore:", error);
        }
    }
}

/**
 * Represents a player with all of their relevant information and capabilities
 */
class Player{
    public _name: string;
    public _avatar: undefined;
    public _playerID: number;
    public _points: number;
    public _curPage: number;



    constructor(ID = 0,name = "") {
        this._name = name;
        this._playerID = ID;
        this._points = 0;
        this._curPage = 0;
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
        const playerData = {
            playerID: player._playerID,
            points: player._points,
            curPage: player._curPage
        };

        try {
            await setDoc(doc(db, "Players", player._playerID.toString()), playerData);
            console.log("Player added to Firestore");
        } catch (error) {
            console.error("Error adding player to Firestore:", error);
        }
    }
}

class Game{
    public _id: number;
    public _curPage: number;
    public _missions: Mission[];
    public _filters: string[];
    public _players: Player[];

    constructor() {
        this._id = Game.generateRandomNumber();
        this._curPage = 0;
        this._missions = [];
        this._filters = []
        this._players = [];
    }


    /**
     * Adds a single player to the list of players in a game
     * @param player
     */
    public addPlayer(player: Player){
        this._players.push(player);
    }

    /**
     * Adds a single mission to the list of mission to be played throughout the night
     * @param mission
     */
    public addMission(mission: Mission){
        this._missions.push(mission);
    }

    /**
     * Adds multiple missions to the list of missions to be played throughout the night
     * @param missions
     */
    public addMissions(missions: Mission[]){
        this._missions.concat(missions);
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
     * The signature looks like this:
     *
     *       let curGame = new Game(PARAMETERS GO HERE)
     *
     *       curGame.addGameToFireStore()
     *
     * "curGame" is an instance of the Game class
     */
    public async addGameToFirestore(){
        Game.addGameToFirestore(this);
    }

    /**
     * static method for adding games to the firestore,
     * The signature looks like this:
     *
     *      let curGame = new Game(PARAMETERS GO HERE)
     *
     *      Game.addGameToFireStore(curGame)
     *
     * "curGame" is an instance of the Game class
     * "Game" is the class itself
     * @param game
     */
    static async addGameToFirestore(game : Game) {
        try {
            const gameCollectionRef = collection(db, 'Games');
            const gameData = {
                id: game._id,
                players: game._players.map((player) => ({
                    playerID: player._playerID,
                    points: player._points,
                    curPage: player._curPage
                })),
                curPage: game._curPage,
                missions: game._missions.map((mission) => ({
                    title: mission._title,
                    description: mission._description,
                    tags: mission._tags,
                    type: mission._type,
                    extras: mission._extras,
                    minNumOfPlayers: mission._minNumOfPlayers,
                    maxNumOfPlayers: mission._maxNumOfPlayers,
                })),
                filters: game._filters.map((filter) => filter)
                // createdAt: Timestamp.now(), // Optional: Include a timestamp for when the game was created
            };

            await setDoc(doc(db, "Games", game._id.toString()), gameData);
            console.log('Game added to Firestore with ID:', game._id);
        } catch (error) {
            console.error('Error adding game to Firestore:', error);
        }
    }

    static async getGameFromFirestore(gameId: number) {
        try {
            const gameDocRef = doc(db, "Games", gameId.toString());
            const gameDocSnapshot = await getDoc(gameDocRef);

            if (gameDocSnapshot.exists()) {
                const gameData = gameDocSnapshot.data();
                const game = new Game();

                // Set the properties of the game object based on the retrieved data
                game._id = gameData.id;
                game._curPage = gameData.curPage;

                // Create Player objects and add them to the game
                gameData.players.forEach((playerData: any) => {
                    const player = new Player();
                    player._playerID = playerData.playerID;
                    player._points = playerData.points;
                    player._curPage = playerData.curPage;
                    game.addPlayer(player);
                });

                // Create Mission objects and add them to the game
                gameData.missions.forEach((missionData: any) => {
                    const mission = new Mission();
                    mission._title = missionData.title;
                    mission._description = missionData.description;
                    mission._tags = missionData.tags;
                    mission._type = missionData.type;
                    mission._extras = missionData.extras;
                    mission._minNumOfPlayers = missionData.minNumOfPlayers;
                    mission._maxNumOfPlayers = missionData.maxNumOfPlayers;
                    game.addMission(mission);
                });

                return game;
            } else {
                console.log("Game does not exist in Firestore.");
                return null;
            }
        } catch (error) {
            console.error("Error retrieving game from Firestore:", error);
            return null;
        }
    }

}

export {Mission, Player, Game}