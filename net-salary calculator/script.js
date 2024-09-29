const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter basic salary: ', (basicSalary) => {
    rl.question('Enter benefits: ', (benefits) => {
        basicSalary = parseFloat(basicSalary);
        benefits = parseFloat(benefits);

        // Calculate gross salary
        const grossSalary = basicSalary + benefits;

        // Calculate NSSF deductions (assuming a flat rate of 6% of gross salary)
        const nssfDeductions = grossSalary * 0.06;

        // Calculate NHIF deductions (using a simplified example)
        const nhifDeductions = calculateNHIF(grossSalary);

        // Calculate PAYE (tax) (using a simplified tax rate of 10% of gross salary)
        const payee = grossSalary * 0.10;

        // Calculate net salary
        const netSalary = grossSalary - (nssfDeductions + nhifDeductions + payee);

        // Output the results
        console.log(`Gross Salary: ${grossSalary}`);
        console.log(`NSSF Deductions: ${nssfDeductions}`);
        console.log(`NHIF Deductions: ${nhifDeductions}`);
        console.log(`PAYE (Tax): ${payee}`);
        console.log(`Net Salary: ${netSalary}`);

        rl.close();
    });
});

// Function to calculate NHIF deductions based on gross salary
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else {
        return 1000;
    }
}