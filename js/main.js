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

// 7 KYU -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
