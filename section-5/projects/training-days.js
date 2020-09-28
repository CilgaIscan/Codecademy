// Create random variable.
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};

const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
        let days = 50;
    } else if (event === 'Triathlon') {
        let days = 100;
    } else if (event === 'Pentathlon') {
        let days = 200;
    }

    return days;
};
const name = 'Nala';

const logEvent = event => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
    const name = 'Nala';
    console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(event);
logTime(days);