import inquirer from 'inquirer';
const calculator = async () => {
    const { operation } = await inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: ['Add', 'Subtract', 'Multiply', 'Divide', 'Modulus'],
        },
    ]);
    const { num1 } = await inquirer.prompt([
        {
            type: 'number',
            name: 'num1',
            message: 'Enter the first number:',
        },
    ]);
    const { num2 } = await inquirer.prompt([
        {
            type: 'number',
            name: 'num2',
            message: 'Enter the second number:',
        },
    ]);
    let result;
    switch (operation) {
        case 'Add':
            result = num1 + num2;
            break;
        case 'Subtract':
            result = num1 - num2;
            break;
        case 'Multiply':
            result = num1 * num2;
            break;
        case 'Divide':
            result = num1 / num2;
            break;
        case 'Modulus':
            result = num1 % num2;
            break;
    }
    console.log(`The result of the operation is: ${result}`);
};
calculator();
