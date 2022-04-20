// Task 1
// Напишите метод, который будет получать массив целых чисел в качестве параметра и будет обрабатывать каждое число из этого массива.
// Вернуть новый массив с обработкой каждого числа входного массива следующим образом:
// Если число имеет целый квадратный корень, возьмите его, иначе возведите число в квадрат.
// Пример
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Примечания
// Входной массив всегда будет содержать только положительные числа и никогда не будет пустым или нулевым.

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// function squareOrSquareRoot(array: number[]): number[] {
//     return array.map(elem => (Number.isInteger(Math.sqrt(elem))) ? Math.sqrt(elem) : elem ** 2);
// }

// console.log(squareOrSquareRoot([1, 49, 3, 4, 5]));