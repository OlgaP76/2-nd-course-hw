// * Задание 1
let a = 10;
alert (a);
a = 20;
alert (a);

// * Задание 2
let releaseYear = Number (prompt ('Год выпуска первого iPhone'));
alert (releaseYear);

//* Задание 3
let creatorsName = String (prompt ('Имя создателя языка JavaScript'));
alert (creatorsName);

//* Задание 4
a = 10;
let b = 2;
alert ('10+2=' + (a+b));
alert ('10-2=' + (a-b));
alert ('10*2=' + (a*b));
alert ('10/2=' + (a/b));

//* Задание 5
let result = b**5;
alert (`2**5= ${result}`);

//* Задание 6
a = 9;
let remainder = a%b;
alert (`9%2= ${remainder}`);

//* Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++ num;
-- num;
alert (num);

//* Задание 8
let age = Number (prompt ("Сколько вам лет?"));
alert (age);

//*Задание 9.0
const user = {
    name: 'Ольга',
    age: 35,
    isAdmin: false
}
alert (`Ваше имя ${user.name} вам ${user.age} лет`);

//*Задание 9.1
user ['city of residence'] = 'Москва';
alert (`Ваш город проживания ${user['city of residence']}`);

//*Задание 9.2
user.age = 45;
alert (`Вам ${user.name} лет`);

//*Задание 9.3
delete user ['city of residence'];
alert (`Ваш город проживания ${user['city of residence']}`);

//*Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//*Задание 9.4
let name = prompt("Как вас зовут?") 
alert (`Привет, ${name}'!'`)
