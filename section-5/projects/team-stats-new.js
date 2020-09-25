// Create team object.
let team = {
    _players: [
        {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
        {firstName: 'Ricardo', lastName: 'Perez', age: 19},   {firstName: 'Willian', lastName: 'Matheson', age: 23
        }],
    _games: [
        {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
        {opponent: 'Apfel', teamPoints: 26, opponentPoints: 34}, {opponent: 'Muller', teamPoints: 37, opponentPoints: 22}],

// Getters for player and games.
    get players (){
        return this._players;
    },
    get games (){
        return this._games;
    },

// Declare function to add new player.
    addPlayer(firstName, lastName, age){
        const player = {
            firstName,
            lastName,
            age,
        };
        this._players.push(player);
    },

// Declare function to add new game.
    addGame(opponent, teamPoints, opponentPoints){
        const game = {
            opponent,
            teamPoints,
            opponentPoints,
        };
        this._games.push(game);
    },
};

// Test addPlayer.
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

// Test addGame.
team.addGame('Bruckville', 16, 28);
team.addGame('Green Yard', 42, 28);
team.addGame('Blue Rocks', 15, 35);
console.log(team._games);