// https://github.com/A-l-E-v/JS_Synergy/blob/main/L-3/L-3.js

// Напишите скрипт, который определяет, к какой четверти часа
// относится хранимое в отдельной переменной количество минут.
// Скрипт должен выводить в консоль название четверти (первая, вторая,
// третья или четвертая).

let minute = 37;
switch (Math.floor(minute / 15)) {
    case (0):
        console.log('первая')
        break
    case (1):
        console.log('вторая')
        break
    case (2):
        console.log('третья')
        break
    case (3):
        console.log('четвертая')
        break
    default:
        console.log('Кол-во минут больше 1 часа.')
}


// Напишите скрипт, который будет по номеру месяца определять время
// года. Если номера с таким месяцем не существует, скрипт должен
// выводить соответствующее сообщение в консоль.

let month = 2;

if ((1 <= month && month <= 2) || (month == 12)) {
    console.log('зима')
}
if (3 <= month && month <= 5) {
    console.log('весна')
}
if (6 <= month && month <= 8) {
    console.log('лето')
}
if (9 <= month && month <= 11) {
    console.log('осень')
}
if ((month > 12) || (month < 1)) {
    console.log('Такого месяца не существует!')
}


// Напишите скрипт, который будет выводить в консоль квадрат числа,
// если оно четное, и его кубическую степень в противном случае

let number = 3
console.log((number%2) ? Math.pow(number,3): Math.pow(number,2))
