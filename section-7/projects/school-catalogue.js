// Create school parent class.
class School {
    // Constructor for name, level and number of students.
    constructor(name, level, number){
        this._name = name;
        this._level = level;
        this._number = number
    }

    // Getters for name, level and number of students.
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get number() {
        return this._number;
    }

    // Setter for number of students.
    set number(arg) {
        if(typeof arg === 'number'){
            this._number = arg;
        } else{
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }

    // Create quckFacts method.
    quickFacts() {
        console.log(`${this._name} educates ${this._number} students at the ${this._level} school level`);
    }

    // Create pickSubstituteTeacher static method.
    static pickSubstituteTeacher(arr) {
        const arrLength = arr.length;
        const random = Math.floor(Math.random()*arrLength);
        return arr[random];
    }
}

// Create Primary School class.
class PrimarySchool extends School{
    // Constructor for PrimarySchool.
    constructor(name, number, pickUpPolicy) {
        super('primary');
        this._name = name;
        this._number = number;
        this._level = 'primary'
        this._pickUpPolicy = pickUpPolicy;
    }

    // Getter for pichUpPolicy.
    get pickUpPolicy() {
        return this._pickUpPolicy;
    }
}

// Create High School class.
class HighSchool extends School {
    // Constructor for HighSchool.
    constructor(name, number, sportsTeam) {
        super('high');
        this._name = name;
        this._number = number;
        this._level = 'high'
        this._sportsTeam = sportsTeam;
    }

    // Getter for sportsTeam.
    get sportsTeam() {
        return this._sportsTeam;
    }
}

// Instance for PrimarySchool.
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

// Instance for HighSchool.
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeam);
