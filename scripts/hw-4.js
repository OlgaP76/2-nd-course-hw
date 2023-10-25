//* Задание 1
let i2 = 1;
while (i2 < 3) {console.log("Привет"); i2++;
}

//* Задание 2
let i = 1;
while (i <= 5) {console.log(i); i++;
}

//* Задание 3
let i1 = 7
do {
    console.log(i1); i1++;
} while (i1 <= 22);

//* Задание 4
let obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400',
};
for (const key in obj) {
   console.log(`${key} — зарплата ${obj[key]} долларов`);
}

//* Задание 5
let n = 1000;
let num = 0;
while (n>=50) {
    n/=2; num++;
}
console.log(n);
console.log(num);

//* Задание 6
let dateFriday = 2
for (let i3 = dateFriday; i3 <= 31; i3+=7) {
    console.log(`Сегодня пятница, ${i3} -е число. Необходимо подготовить отчет.`);
}




