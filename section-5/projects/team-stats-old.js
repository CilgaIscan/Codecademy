const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11,
        },
        {
            firstName: 'Pietro',
            lastName: 'Ramirez',
            age: 16,
        },
        {
            firstName: 'Rafa',
            lastName: 'Guido',
            age: 13,
        },
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27,
        },
        {
            opponent: 'Madrid',
            teamPoints: 28,
            opponentPoints: 16,
        },
        {
            opponent: 'Milano',
            teamPoints: 17,
            opponentPoints: 27,
        },
    ],

    get players(){
        return this._players
    },

    get games(){
        return this._games
    },

    addPlayer(firstName, lastName, age){
        const player = {
            firstName,
            lastName,
            age,
        };
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
        const game = {
            opponent,
            teamPoints,
            opponentPoints,
        };
        this._games.push(game);
    },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players)

team.addGame('aB', 22, 28);
team.addGame('aBc', 44, 28);
team.addGame('aB', 67, 12);
console.log(team.games)
