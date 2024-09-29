function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    
    if (speed < speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        return demeritPoints;
    }
}

function promptUser() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter the speed of the car (km/h): ', (input) => {
        const speed = parseFloat(input);

        if (isNaN(speed) || speed < 0) {
            console.log('Please enter a valid speed.');
        } else {
            const result = calculateDemeritPoints(speed);
            if (typeof result === 'string') {
                console.log(result);
            } else {
                console.log(`Demerit points: ${result}`);
            }
        }

        readline.close();
    });
}

promptUser();