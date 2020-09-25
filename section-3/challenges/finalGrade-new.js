// Declare finalGrade.
const finalGrade = (g1, g2, g3) => {
    if ((g1 < 0 || g1 > 100) || (g2 < 0 || g2 > 100) || (g3 < 0 || g3 > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (g1 + g2 + g3) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

// Test
console.log(finalGrade(14,55,60));
console.log(finalGrade(114,55,60));