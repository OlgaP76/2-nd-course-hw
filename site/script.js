

const gameSeason = (answerUser = Number(prompt('Введите номер месяца (от 1 до 12)'))) => {

    if (answerUser === 1 || answerUser === 2 || answerUser === 12) {
        return ('Зима');

    } else if (answerUser === 3 || answerUser === 4 || answerUser === 5) {
        return ('Весна');

    } else if (answerUser === 6 || answerUser === 7 || answerUser === 8) {
        return ('Лето');

    } else if (answerUser === 9 || answerUser === 10 || answerUser === 11) {
        return ('Осень');

    } else {
        return ('Нет такого месяца');

    }
}