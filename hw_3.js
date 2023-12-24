console.log('1. Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени')

console.log(cubeRaise(2));
console.log(cubeRaise(3));

function cubeRaise(num) {
    return Math.pow(num, 3);
}

console.log('2. Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно. Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"')

let salary = Number(prompt('Введите заработную плату: '));

if (Number.isNaN(salary)) {
    console.log('Значение задано неверно!')
}
else {
    console.log('Размер заработной платы за вычетом налогов равен ' + countNetSalary(salary) + ' руб.');
}

function countNetSalary(salary) {
    return salary / 100 * 87;
}

console.log('3. Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел')
let max = 0;

for (let i = 0; i <= 2; i++) {
    let num = prompt(`Введите число ${i + 1}: `);
    max = checkMax(max, num);
}

function checkMax(max, num) {
    return num > max ? num : max;
}


console.log(`Максимальное число ${max}`);
alert(`Максимальное число ${max}`); 

console.log('4. Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):' +
'\n1. Сложение' + 
'\n2. Разность' +
'\n3. Умножение' +
'\n4. Деление' +
'\nНеобходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере,' +  
' ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность,' + 
' функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.')


let num1 = Number(prompt(`Введите число 1: `));
let num2 = Number(prompt(`Введите число 2: `));

const addition = (num1, num2) => {
    return num1 + num2;
}

const substraction = (num1, num2) => {
    if (num1 > num2) return num1 + num2;
    else return num2 - num1;
}

const division = (num1, num2) => {
    return num1 / num2;
}

const multiplication = (num1, num2) => {
    return num1 * num2;
}

console.log(`${num1} + ${num2} = ${addition(num1, num2)}`);
num1 > num2 ? console.log(`${num1} - ${num2} = ${addition(num1, num2)}`) : console.log(`${num2} - ${num1} = ${addition(num1, num2)}`);
console.log(`${num1} / ${num2} = ${division(num1, num2)}`);
console.log(`${num1} * ${num2} = ${multiplication(num1, num2)}`);
