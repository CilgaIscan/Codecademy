// Create menu object.
let menu = {
    // Create courses nested object.
    _courses: {
        // Declare appetizers, mains and deserts.
        appetizers: [],
        mains: [],
        desserts: [],
    },
    // Getters and setters for appetizers, mains and desserts.
    get appetizers() {
        return this._course.appetizers;
    },
    set appetizers(newValue) {
        this._courses.appetizers = newValue;
    },
    get mains() {
        return this._course.mains;
    },
    set mains(newValue) {
        this._courses.mains = newValue;
    },
    get desserts() {
        return this._course.deserts;
    },
    set desserts(newValue) {
        this._courses.desserts = newValue;
    },

    // Declare courses function to return courses.
    get courses() {
        return {appetizers: this.appetizers, mains: this.mains, desserts: this.deserts};
    },

    // Declare addDishToCourse function to add new dishes.
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },

    // Declare getRandomDishFromCourse function yo pick random course.
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const index = Math.floor(Math.random() * dishes.length);
        return dishes[index];
    },

    // Declare generateRandomMeal.
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        return `A: ${appetizer.name}, M: ${main.name}, D: ${dessert.name}. Total: ${appetizer.price + main.price + dessert.price}`;
    },
};

// Test addDishToCourse.
    menu.addDishToCourse('appetizers', 'Fish finger', 6);
    menu.addDishToCourse('mains', 'Risotto', 9);
    menu.addDishToCourse('desserts', 'Tiramisu', 6);

// Test generateRandomMeal.
    let meal = menu.generateRandomMeal();
    console.log(meal);