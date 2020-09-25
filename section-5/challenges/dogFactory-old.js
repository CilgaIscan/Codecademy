// Write your code here:
function dogFactory(name, breed, weight){
    const obj = {
        _name:name,
        _breed:breed,
        _weight:weight,

        get name(){
            return this._name;
        },
        get breed(){
            return this._breed;
        },
        get weight(){
            return this._weight;
        },

        set name(nm){
            this._name=nm;
        },
        set breed(br){
            this._breed=br;
        },
        set weight(wg){
            this._weight=wg;
        },

        bark(){
            return 'ruff! ruff!'
        },
        eatTooManyTreats(){
            this._weight+=1
        },
    }
    return obj;
}


