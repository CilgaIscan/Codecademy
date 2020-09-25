const _ = {
    clamp(num, low, up) {
        let lowtest= Math.max(num,low);
        let uptest=Math.min(lowtest,up);
        return uptest;
    },

    inRange(num, start, end) {
        if (!end) {
            end = 0
        }

        if (start > end) {
            [start, end] = [end, start]
        }

        if (num < start || num >= end) {
            return false
        } else {
            return true
        }
    },

    words(str) {
        return str.split(' ')
    },

    pad(str, len) {
        if(len-str.length <= 0){
            return str;
        }
        const startPaddingLength = len - str.length;
        if(startPaddingLength % 2 == 1){
            str = str + " "
        }
        const add = Math.floor(startPaddingLength / 2);
        for (let i=0; i< add; i++){
            str= " " + str + " "
        }
        return str;
    },

    has(obj, key){
        if(obj[key] != undefined){
            return true;
        }
        else {
            return false;
        }
    },

    invert(obj){
        const inv={};
        for(key in obj){
            const val = obj[key];
            inv[val]=key;
        }
        return inv;
    },

    findKey(obj, func){
        for(key in obj){
            const val = obj[key];
            const ret = func(val);
            if (ret == true){
                return key;
            }
        }
        return undefined;
    },

    drop(arr, num){
        const newarr=arr;
        if(num == undefined){
            return newarr.slice(1);
        }
        return newarr.slice(num);
    },

    dropWhile(arr, func){
        const dropFinishLocation = arr.findIndex((elem, index, a) => !func(elem, index, a));
        return this.drop(arr, dropFinishLocation)
    },

    chunk(arr, size){
        if(size == undefined){
            size=1;
        }
        let result = [];
        for(let i = 0; i < arr.length; i += size){
            const chunky = arr.slice(i, i+size);
            result.push(chunky);
        };
        return result;
    },

};



// Do not write or modify code below this line.
module.exports = _;