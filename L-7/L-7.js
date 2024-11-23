// https://github.com/A-l-E-v/JS_Synergy/blob/main/L-7/L-7.js

// 2. Создайте скрипт. Напишите в нем функцию, которая проверяет,
// является ли заданная строка палиндромом. Итог проверки должен
// выводите в консоль.

let string1 = 'аа'
let string2 = 'ΝΙΨΟΝΑΝΟΜΗΜΑΤΑΜΗΜΟΝΑΝΟΨΙΝ'
let string3 = 'saippuakivikauppias'
let string4 = 'javascript'


function palindrome(str) {

    let str_half_length = Math.floor(str.length / 2)
    let str_length = Math.floor(str.length)

    for (let p = 0; p <= str_half_length - 1; p++) {

        if (str[p] != str[str_length - p - 1]) return false

    }

    return true
}

console.log(`Строка ${string1} ${(palindrome(string1)) ? '' : 'не '}палиндром`)
console.log(`Строка ${string2} ${(palindrome(string2)) ? '' : 'не '}палиндром`)
console.log(`Строка ${string3} ${(palindrome(string3)) ? '' : 'не '}палиндром`)
console.log(`Строка ${string4} ${(palindrome(string4)) ? '' : 'не '}палиндром`)


// 3. Создайте скрипт. Напишите в нем функцию, которая принимает число
// в качестве параметра и проверяет, является ли число простым или нет.
// Итог проверки должен выводите в консоль.

let number1 = 2
let number2 = 97
let number3 = 524287
let number4 = 524288

function isItPrime(number) {
    sqrt_number = Math.sqrt(number)
    for (let n = 2; n <= sqrt_number; n++) {
        if (number % n == 0) return false
    }
    return true
}

console.log(`Число ${number1} ${(isItPrime(number1)) ? 'простое.' : 'составное'}`)
console.log(`Число ${number2} ${(isItPrime(number2)) ? 'простое.' : 'составное'}`)
console.log(`Число ${number3} ${(isItPrime(number3)) ? 'простое.' : 'составное'}`)
console.log(`Число ${number4} ${(isItPrime(number4)) ? 'простое.' : 'составное'}`)


// 4. Создайте скрипт. Напишите в нем функцию, которая определяет
// возраст человек по дню, месяцу и году рождения. На вход функция
// должна принимать данные в формате Date (создается на основе 3
// числе). Итог проверки выводите в консоль.

let dob1 = '1953-07-21'
let dob2 = '1951-02-23'
let dob3 = '1979-10-09'
const milliseconds = 24 * 60 * 60 * 1000

function age(dob) {
    let current_date = new Date()
    let dob_formatted = new Date(dob)

    let age = parseInt((current_date - dob_formatted) / milliseconds / 365)

    return age

}
console.log(`ДР: ${dob1}, возраст: ${age(dob1)} `)
console.log(`ДР: ${dob2}, возраст: ${age(dob2)} `)
console.log(`ДР: ${dob3}, возраст: ${age(dob3)} `)




// 5. Создайте скрипт. Напишите в нем функцию, которая определяет, была
// ли введенная дата выходным днем.

// let dob1 = '1953-07-21'
// let dob2 = '1951-02-23'
// let dob3 = '1979-10-09'

let dob4 = '2024-11-23'
let dob5 = '2024-11-24'
let dob6 = '2024-11-25'
let dob7 = '2024-11-22'
function isWeekend(anyDay) {

    let formatted_anyDay = new Date(anyDay)
    if (formatted_anyDay.getDay() == 6 || formatted_anyDay.getDay() == 0) return true
    return false
}
console.log(`Дата ${dob1} ${(isWeekend(dob1)) ? '' : 'не '}была выходным днём.`)
console.log(`Дата ${dob2} ${(isWeekend(dob2)) ? '' : 'не '}была выходным днём.`)
console.log(`Дата ${dob3} ${(isWeekend(dob3)) ? '' : 'не '}была выходным днём.`)
console.log(`Дата ${dob4} ${(isWeekend(dob4)) ? '' : 'не '}выходной.`)
console.log(`Дата ${dob5} ${(isWeekend(dob5)) ? '' : 'не '}выходной.`)
console.log(`Дата ${dob6} ${(isWeekend(dob6)) ? '' : 'не '}выходной.`)
console.log(`Дата ${dob7} ${(isWeekend(dob7)) ? '' : 'не '}выходной.`)
