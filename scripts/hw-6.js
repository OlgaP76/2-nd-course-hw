//* Задание 1

const arrNumbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arrNumbers.length; i++) {
    console.log(arrNumbers[i]);
    if (arrNumbers[i] === 10) break;
};

//* Задание 2
const arrNumbers1 = [1, 5, 4, 10, 0, 3];
console.log(`Индекс числа 4 - ${arrNumbers1.indexOf(4)}`);

//* Задание 3
const arrNumbers2 = [1, 3, 5, 10, 20];
console.log(arrNumbers2.join(' '));

//* Задание 4
const arrNumbers3 = [];
for (let i = 0; i < 3; i++) {
    arrNumbers3[i] = [];
    for (let j = 0; j < 3; j++) {
        arrNumbers3[i][j] = 1;
    }
}
console.log(arrNumbers3);

//* Задание 5

const arrNumbers4 = [1, 1, 1];
let result4 = arrNumbers4.push(2, 2, 2);
console.log(arrNumbers4);

//* Задание 6
const arrNumbers5 = [9, 8, 7, 'a', 6, 5];
let result5 = arrNumbers5
.filter(i => !isNaN(i))
.sort();
console.log(result5);

//* Задание 7
const arrNumbers6 = [9, 8, 7, 6, 5];
let answer = Number(prompt('Угадай число'));
if (arrNumbers6.includes(answer)) {
    alert('Угадал');
} else {
    alert('Не угадал')   
}

//* Задание 8
let str  = 'abcdef';
let arrNumbers7 = str.split('').reverse().join('');
console.log(`'${arrNumbers7}'`);

//* Задание 9
const arrNumbers8 = [[1, 2, 3,], [4, 5, 6]];
console.log(arrNumbers8.flat());

//* Задание 10
let length = 10;
const array = Array(length).fill().map(() => Math.floor(11 * Math.random()));
console.log(array);
for (let i = 0; i < array.length - 1; i++) {
    console.log(array[i] + array[i + 1]);
};

//* Задание 11
console.log(array.map(i => i ** 2));

//* Задание 12
const arrNumbers11 = ['слово', '', 'слог', 'длинное предложение', 'буква'];
console.log(arrNumbers11.map(s => s.length));

//* Задание 13

function filterPositive(array) {
    return array.filter(i => i < 0);
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

//* Задание 14
const arrNumbers13 = [];
for (let i = 0; i < 10; i++) {
    arrNumbers13.push(Math.floor(Math.random()*11));
}
const evenNum = arrNumbers13.filter(i => i % 2 === 0);
console.log(`Исходный массив - ${arrNumbers13}`);
console.log(`Четный массив - ${evenNum}`);


//* Задание 15
const arrNumbers14 = [];
for (let i = 0; i <6; i++) {
    arrNumbers14.push(Math.floor(Math.random()*11));
}
const averageNum = arrNumbers14.reduce((a,i) => a+i)/arrNumbers14.length;
console.log(`Исходный массив - ${arrNumbers14}`);
console.log(`Среднее арифметическое - ${averageNum}`);