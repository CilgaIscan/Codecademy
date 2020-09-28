// Create media parent class with common features.
class Media {
    // Create constructor for media.
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // Create getters for title, isCheckedOut and ratings.
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }

    // Create setter for isCheckedOut to a value.
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    // Create toggleCheckedOutStatus method to reverse isCheckout's value to original.
    toggleCheckedOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    // Create getAverageRating method to calculate average of ratings.
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const lengthOfArray = this._ratings.length;
        return ratingsSum/lengthOfArray;
    }

    // Create addRating method to add a new rating.
    addRating(arg) {
        this._ratings.push(arg);
    }
}

// Create book child class as an extend of media class.
class Book extends Media {
    // Constructor for book class.
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    // Getters for book specific properties.
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

// Create movie child class as an extend of media class.
class Movie extends Media {
    // Constructor for movie class.
    constructor (director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    // Getters for movie specific properties.
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

// Create a book instance.
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// Call toggleCheckedOutStatus for historyOfEverything.
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);

// Add ratings for historyOfEverything.
historyOfEverything.addRating(3);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);

// Get average rating for historyOfEverything.
console.log(historyOfEverything.getAverageRating());

// Create a movie instance.
const speed = new Movie('Jan de Bont', 'Speed', 116);

// Call toggleCheckedOutStatus for historyOfEverything.
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);

// Add ratings for historyOfEverything.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// Get average rating for historyOfEverything.
console.log(speed.getAverageRating());