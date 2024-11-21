// https://github.com/A-l-E-v/JS_Synergy/blob/main/L-5/L-5.js

// Напишите скрипт, который изменяет строку “luke, I am your father” на
// “Luke, I am your father” и выводит новую строку в консоль.

const string1 = 'luke, I am your father'

const string2 = string1[0].toUpperCase() + string1.substring(1, string1.length)
console.log(string2)
console.log('')

// Напишите скрипт, который сравнивает две строки: “AbcdEfg” и
// “abCDEFg”, затем приводит их к единому написанию - заглавным
// буквам и сравнивает вновь. Результаты обоих сравнений должны
// выводиться в консоль.

const string3 = 'AbcdEfg'
const string4 = 'abCDEFg'

console.log(`string3 = ${string3}`)
console.log(`string4 = ${string4}`)

let compare34 = string3.localeCompare(string4)

console.log(`Compare value = ${compare34}`)
console.log('')


let string3_1 = string3.toUpperCase()
let string4_1 = string3.toUpperCase()

console.log(`string3_1 = ${string3_1}`)
console.log(`string4_1 = ${string4_1}`)

let compare34_1 = string3_1.localeCompare(string4_1)
console.log(`Compare value 2 = ${compare34_1}`)
console.log('')




// Напишите скрипт, который обрабатывает массив чисел [2000, 2001,
// 2002, 2003, 2004 и 2005]. Скрипт должен определить и вывести в
// консоль високосный год (или несколько) из набора чисел массива.

const years = [2000, 2001, 2002, 2003, 2004, 2005]
console.log(years)
console.log('Високосные года:')

for (let year of years) {
    if ((year % 4 == 0 && year % 4 != 100) || year % 400 == 0) console.log(year)
}
console.log('')

// Напишите скрипт, который обрабатывает массив чисел [6, 187, 66, 4, 67,
// 30, 18]. Скрипт должен отсортировать массив сначала с помощью
// метода sort,, а затем - reverse. Результаты обоих сортировок должны
// выводить в консоль.

const array = [6, 187, 66, 4, 67, 30, 18]

console.log(array.sort((a, b) => (a - b)))

console.log(array.reverse((a, b) => (a - b)))