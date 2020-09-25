const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get courses(){
        return {
            appetizers : this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    get appetizers(){
        return this._courses.appetizers
    },
    set appetizers(newValue){
        this._courses.appetizers = newValue
    },
    get mains(){
        return this._courses.mains
    },
    set mains(newValue){
        this._courses.mains = newValue
    },
    get desserts(){
        return this._courses.desserts
    },
    set desserts(newValue){
        this._courses.desserts = newValue
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const index = Math.floor(Math.random()*dishes.length);
        return dishes[index];
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        return `A: ${appetizer.name}, M: ${main.name}, D: ${dessert.name}. Total: ${appetizer.price + main.price + dessert.price}`;
    }
}

menu.addDishToCourse('appetizers', 'Fish fingers', 6);
menu.addDishToCourse('mains', 'Risotto', 9);
menu.addDishToCourse('desserts', 'Tiramisu', 6);

let meal = menu.generateRandomMeal()
console.log(meal)
