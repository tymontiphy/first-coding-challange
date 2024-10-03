// this function is used to get the grade

function getGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 49) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}
// prompts the user to enter a grade.
function promptUser() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter student marks (0-100): ', (input) => {
        const marks = parseFloat(input);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log('Please enter a valid mark between 0 and 100.');
        } else {
            const grade = getGrade(marks);
            console.log(`The grade is: ${grade}`);
        }

        readline.close();
    });
}

promptUser();

 
