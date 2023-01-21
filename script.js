/* Задача 1. Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

let text = "пояснение";
for (let i = 0; i < 11; i++) {
  if (i === 0) {
    text = "это ноль";
  } else if (i % 2 === 0) {
    text = "четное число";
  } else {
    text = "нечетное число";
  }
  console.log(`${i} - ${text}`);
}

/* Задача 2. Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/

const array = [1, 2, 3, 4, 5, 6, 7];
const startArray = array.slice(0, 3);
const endArray = array.slice(5, 7);
const newArray = startArray.concat(endArray);
console.log(array);
console.log(newArray);

/* Задача 3. Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/

const array1 = [];
let sum = 0;
let min = 10;
let count1 = 0;
for (let i = 0; i < 5; i++) {
  array1[i] = Math.round(Math.random() * 10);
  sum = sum + array1[i];
  array1[i] < min ? (min = array1[i]) : (min = min);
  array1[i] === 3 ? (count1 = count1 + 1) : (count1 = count1);
}
console.log(array1);
console.log(sum);
console.log(min);
console.log(count1 > 0 ? "В массиве есть число 3" : "В массиве нет числа 3");

/* Задача 4. Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx

*/

let simbol = "";
for (let i = 0; i < 20; i++) {
  simbol += "x";
  console.log(simbol);
}
