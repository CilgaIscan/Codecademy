// Declare function.
const tipCalculator = (quality, total) =>{
    quality = quality.toLowerCase();
    if(quality==='bad'){
        return total*0.05;
    }
    else if(quality==='ok'){
        return total*0.15;
    }
    else if(quality==='good'){
        return total*0.20;
    }
    else if(quality==='excellent'){
        return total*0.30;
    }
    else{
        return total*0.18;
    }
}

// Test.
console.log(tipCalculator('bad',50));
console.log(tipCalculator('excellent',500));