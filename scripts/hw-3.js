//* Задание 1
let password = 'Vs153!q';
let answer = prompt('Введите пароль');
if (answer===password) {alert ('Пароль введен верно');

} else { alert ('Пароль введен неправильно');

}

//or
let password1 = 'Vs153!q';
let answer1 = prompt('Введите пароль');
if (answer===password) {console.log ('Пароль введен верно'); 

} else {console.log ('Пароль введен неправильно');

}

//* Задание 2
let c = prompt('Введите любое число');
if (c > 0 && c < 10 ) {console.log('Верно')
    
} else {console.log ('Неверно')
    
}

//* Задание 3
let d = prompt('Введите первое число');
let e = prompt('Введите второе число');

if (d > 100 || e > 100) {console.log('Верно')
    
} else {console.log('Неверно')
    
}

//* Задание 4
let a = '2';
let b = '3';
alert(Number(a)+ Number(b));

//* Задание 5
let monthNumber = prompt ('Введите номер месяца');
switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('Зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('Весна');
        break;
    default:
        console.log('Нет такого месяца');
        console.log('Попробуй еще раз');
}

//* or

let monthNumber1 = Number(prompt ('Введите номер месяца'));
switch (monthNumber1) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Весна');
        break;
    default:
        console.log('Нет такого месяца');
        console.log('Попробуй еще раз');
}

//* Задание 7
let number = Number(prompt('Пожалуйста, введите любое число'));
let remainder = Number(number%2);

if (isNaN (number)) {alert('NaN')
        
} else if(remainder === 0) {alert (`${number} - Число четное`)}

else {alert (`${number} - Число нечетное`)
}

//* Задание 8
let clientOS = 1;
clientOS === 0 ? console.log(`Установите версию приложения для iOS по ссылке`) : console.log(`Установите версию приложения для Android по ссылке`)

//*Задание 9
let clientOS1 = 0; 
let clientDeviceYear = 2000;
if ((clientOS === 1) && (clientDeviceYear >= 2015)) {
    console.log(`Установите версию приложения для Android по ссылке`);
} else if ((clientOS === 1) && (clientDeviceYear < 2015)) {
    console.log(`Установите облегченную версию приложения для Android по ссылке`);
} else if ((clientOS === 0) && (clientDeviceYear >= 2015)) {
    console.log(`Установите версию приложения для iOS по ссылке`);
} else {
    console.log(`Установите облегченную версию приложения для iOS по ссылке`);
}

