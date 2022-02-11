"use strict";

// 8 KYU -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Task 1
// Write a function that checks if a given string (case insensitive) is a palindrome.
// Напишите функцию, которая проверяет, является ли заданная строка (без учета регистра) палиндромом .

// function isPalindrome(x) {
//     const arrStr = x.split('').reverse().join('').toLowerCase();
//     let flag = false;

//     if (x.toLowerCase() == arrStr) {
//         flag = true;
//     } else {
//         flag = false;
//     }
//     return flag;
// }

// console.log(isPalindrome('Aba'));


// Task 2
// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Филипу только что исполнилось четыре года, и он хочет знать, сколько ему будет лет в различные годы в будущем, например, в 2090 или 3044 году. может ответить на бесконечные вопросы Филиппа.
// Ваша задача — написать функцию, которая принимает два параметра: год рождения и год, по отношению к которому считается количество лет. Поскольку Филип с каждым днем ​​становится все более любопытным, он может вскоре захотеть узнать, сколько лет прошло до его рождения, поэтому ваша функция должна работать как с датами в будущем, так и с прошлыми датами.
// Предоставьте вывод в следующем формате: Для дат в будущем: «Вам ... лет». Для дат в прошлом: «Вы родитесь в ... году (годах)». Если год рождения равен запрашиваемому году: "Вы родились в этом году!"
// "..." должны быть заменены числом, за которым следует один пробел. Имейте в виду, что вам нужно учитывать как «год», так и «годы», в зависимости от результата.


// 1 option
// function calculateAge(myYear, year) {
//     let result = '';
//     const resYear = Math.abs(year - myYear);

//     if (myYear < year) {
//         if (resYear > 1) {
//             result = `You are ${resYear} years old.`;
//         } else {
//             result = `You are ${resYear} year old.`;
//         }
//     } else if (myYear > year) {
//         if (resYear >= 10) {
//             result = `You will be born in ${resYear} years.`;
//         } else {
//             result = `You will be born in ${resYear} year.`;
//         }
//     } else {
//         result = `You were born this very year!`;
//     }
//     return result;
// }

// 2 option
// function calculateAge(myYear, year) {
//     let result = '';
//     const resYear = Math.abs(year - myYear);

//     if (myYear < year) {
//         result = `You are ${resYear} year${resYear > 1 ? 's' : ''} old.`;
//     } else if (myYear > year) {
//             result = `You will be born in ${resYear} year${resYear >= 10 ? 's' : ''}.`;
//     } else {
//         result = `You were born this very year!`;
//     }
//     return result;
// }

// console.log(calculateAge(2000, 1993));


// Task 3
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
// You need to consider the following ratings:
// Terrible: tip 0 %
//     Poor: tip 5 %
//         Good: tip 10 %
//             Great: tip 15 %
//                 Excellent: tip 20 %
//                     The rating is case insensitive(so "great" = "GREAT").If an unrecognised rating is received, then you need to return:
// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or - 1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

// Заполните функцию, которая рассчитывает, сколько вам нужно чаевых, исходя из общей суммы счета и услуги.
// Вам необходимо учитывать следующие рейтинги:

// Ужасно: чаевые 0 %
//     Плохо: чаевые 5 %
//         Хорошо: чаевые 10 %
//             Отлично: чаевые 15 %
//                 Отлично: чаевые 20 %
//                     Рейтинг нечувствителен к регистру(поэтому "отлично" = "ОТЛИЧНО").Если получен непризнанный рейтинг, то нужно вернуть:

// "Rating not recognised"на Javascript, Python и Ruby...
// ...или nullна Яве
// ...или - 1в С#
// Поскольку вы хороший человек, вы всегда округляете чаевые, независимо от услуги.

// function calculateTip(amount, rating) {
//     const rate = rating.toLowerCase();
//     const percent = {
//         poor: 5,
//         good: 10,
//         great: 15,
//         excellent: 20
//     };
//     let result = 0;

//     switch (rate) {
//         case 'terrible':
//             result = amount;
//             break;
//         case 'poor':
//             result = Math.ceil(amount * percent.poor / 100);
//             break;
//         case 'good':
//             result = Math.ceil(amount * percent.good / 100);
//             break;
//         case 'great':
//             result = Math.ceil(amount * percent.great / 100);
//             break;
//         case 'excellent':
//             result = Math.ceil(amount * percent.excellent / 100);
//             break;
//         default:
//             result = 'Rating not recognised';
//             break;
//     }

//     return result;
// }

// console.log(calculateTip(11, 'poor'));


// Task 4
// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

//     addition = add

// multiply = multiply

// division = divide(both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a(operation) b

// a(operation) b *

// Создайте несколько функций, которые будут возвращать сумму, разность, модуль, произведение, частное и показатель степени соответственно.

// Пожалуйста, используйте следующие имена функций:

// дополнение = добавить

// умножить = умножить

// Division = разделить (допускаются как целочисленные, так и дробные деления)

// модуль = мод

// экспоненциальный = показатель степени

// вычитание = вычитание

// Примечание. Все математические операции будут: a (операция) b

// а (операция) б*

// function add(a, b) {
//     return a + b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function mod(a, b) {
//     return a % b;
// }

// function exponent(a, b) {
//     return Math.pow(a, b);
// }

// function subt(a, b) {
//     return a - b;
// }


// Task 5
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']  => 'hello world this is great'
// Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение. Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, но вы должны добавлять пробелы между каждым словом. Будьте внимательны, не должно быть пробела ни в начале, ни в конце предложения!
// Пример
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function smash(words) {
//     return words.join(' ');
// }

// console.log(smash(['Hello', 'my', 'friend.', 'How', 'are', 'you?']));


// Task 6
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// Наша футбольная команда завершила чемпионат.Результат каждого совпадения выглядит как "x:y".Результаты всех матчей фиксируются в сборнике.

//     Например: ["3:1", "2:2", "0:1", ...]

// Напишите функцию, которая берет такую ​​коллекцию и считает очки нашей команды в чемпионате.Правила подсчета очков за каждый матч:

// если х > у - 3 балла
// если х < у - 0 баллов
// если х = у - 1 балл
// Примечания:

// в чемпионате 10 матчей
// 0 <= х <= 4
// 0 <= у <= 4

// function points(games) {
//     const newArrGames = games.join('').replace(/:/g, '').split('');
//     let point = 0;

//     for (let i = 0; i <= newArrGames.length - 1; i += 2) {
//         if (+newArrGames[i] > +newArrGames[i + 1]) {
//             point += 3;
//         } else if (+newArrGames[i] < +newArrGames[i + 1]) {
//             point;
//         } else {
//             point++;
//         }
//     }
//     return point;
// }

// console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]));


// Task 7
// Написать функцию рекурсию, которая выводит все значения в массиве

// function recursionArr(array) {
//     for (let i = 0; i <= array.length - 1; i++) {
//         if (typeof array[i] != 'object') {
//             console.log(array[i]);
//         }
//         recursionArr(array[i]);
//     }
// }

// recursionArr([1, [2, 3], 4, [5, [6, 7]]]);


// Task 8
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples:
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// Камень ножницы Бумага
// Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьей возврат Draw!.
// Примеры:
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!


// const rps = (p1, p2) => {
//     let winner;

//     if (p1 === p2) {
//         winner = 'Draw!'
//     } else if (p1 === 'scissors' && p2 === 'paper') {
//         winner = 'Player 1 won!';
//     } else if (p1 === 'paper' && p2 === 'rock') {
//         winner = 'Player 1 won!';
//     } else if (p1 === 'rock' && p2 === 'scissors') {
//         winner = 'Player 1 won!';
//     } else {
//         winner = 'Player 2 won!';
//     }

//     return winner;
// };

// console.log(rps('paper', 'scissors'));


// Task 9
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
// На ежегодном семейном собрании семье нравится находить возраст самого старшего из живущих членов семьи и возраст самого младшего члена семьи и вычислять разницу между ними.
// Вам будет предоставлен массив возрастов всех членов семьи в любом порядке. Возраст будет указан в целых числах, поэтому ребенку в возрасте 5 месяцев будет присвоен «возраст» равный 0. Верните новый массив (кортеж в Python) с [самый младший возраст, самый старший возраст, разница между самым младшим и самым старшим возраст].

// function differenceInAges(ages){
//     let agesArr = [];

//     agesArr.push(Math.min(...ages));
//     agesArr.push(Math.max(...ages));
//     agesArr.push(Math.max(...ages) - Math.min(...ages));

//     return agesArr;
// }

// console.log(differenceInAges([57, 99, 14, 32]));


// Task 10
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// У всех животных праздник! Каждое животное приносит одно блюдо. Есть только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и имя животного. Например, большая голубая цапля приносит чесночный наан, а синица приносит шоколадный торт.
// Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов и возвращает true или false, чтобы указать, разрешено ли животному принести блюдо на пир.
// Предположим, что beastи dishвсегда строчные строки, и каждая из них состоит как минимум из двух букв. beastи dishможет содержать дефисы и пробелы, но они не будут отображаться в начале или конце строки. Они не будут содержать цифр.

// 1-option
// function feast(beast, dish) {
//     const dishStrs = dish.split('');
//     const beastStrs = beast.split('');
//     let flag = false;

//     if ((beastStrs[0] === dishStrs[0] && (beastStrs[beastStrs.length - 1] === dishStrs[dishStrs.length - 1]))) {
//         flag = true;
//     } else {
//         flag = false;
//     }

//     return flag;
// };


// 2-option
// function feast(beast, dish) {
//     const dishStrs = dish.split('');
//     const beastStrs = beast.split('');

//     return (beastStrs[0] === dishStrs[0] && (beastStrs[beastStrs.length - 1] === dishStrs[dishStrs.length - 1]));
// };

// 3-option
// function feast(beast, dish) {
//     const dishStrs = dish.split('');
//     const beastStrs = beast.split('');

//     return (beastStrs.shift() === dishStrs.shift()) && (beastStrs.pop() === dishStrs.pop());
// };

// console.log(feast("brown bear", "bear claw"));














































// 7 KYU -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
