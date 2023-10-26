
//* Задание 1

const minNumber = (a, b) => {
    return a <= b ? a : b;
}
console.log(minNumber(3, 5));


//* Задание 2

const remainder = (c) => {
    return c % 2 === 0 ? 'Число четное' : 'Число нечетное';

}
console.log(remainder(7));

//* Задание 3.1
let num = 4;

const squareNum = (num) => {
    let result = num ** 2;
    console.log(result);
}
squareNum(num);

//* Задание 3.2
num = 5;
const squareNum1 = (num) => {
    return num ** 2;
}
console.log(squareNum1(num));


//* Задание  4
const useAge = (answerUser = Number(prompt('Сколько вам лет?'))) => {
    if (answerUser < 0) {
        return ('Вы ввели неправильное значение');

    } else if (answerUser >= 0 && answerUser <= 12) {
        return ('Привет, друг!');
    } else {
        return ('Добро пожаловать!');
    }
}

alert(useAge());

//* Задание 5

let a = Number(prompt('Введите перволе число'));
let b = Number(prompt('Введите второе число'));
function mult() {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или несколько значений не являются числом'

    } else {
        return a * b

    }
}
alert(mult());



//* Задание 6
const numUser = (n = Number(prompt('Введите число'))) => {
    if (!isNaN(n)) {
        return (`n в кубе равно ${n ** 3}`);


    } else {
        return ('Переданный параметр не является числом');

    }
}

alert(numUser());



//* Задане 7

function getCircleArea() {
    return Math.PI * this.radius ** 2;
};

function getCirclePerim() {
    return 2 * Math.PI * this.radius;
};

const circle1 = {
    radius: 12,

    getArea: getCircleArea,
    getPerim: getCirclePerim,

};

const circle2 = {
    radius: 10,

    getArea: getCircleArea,
    getPerim: getCirclePerim,

};
console.log(circle1.getArea());
console.log(circle1.getPerim());
console.log(circle2.getArea());
console.log(circle2.getPerim());

