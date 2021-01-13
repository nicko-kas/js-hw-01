// Написати програму яка отримає від користувача число (кількість
//     хвилин) і виведе на екран строку в форматі години і хвилини
//     Приклад 70 покаже 1:10 450 покаже 7:30 1441 покаже 24:1

function convertMinToTime(input) {
  let hours = Math.trunc(input / 60);
  let minuts = input % 60;
  return hours + ":" + minuts;
}

let input = prompt("Укажите количество минут");

alert(convertMinToTime(input));
