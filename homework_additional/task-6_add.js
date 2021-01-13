// Написати програму де користувач вводить 3 числа, після вводу всіх
//               трьох чисел йому на екрані показується найбільше з них. Додатково
//               перевіряти чи це взагалі числа

let input1 = prompt("Укажите первое число");
let arr = [];

Number.isInteger(Number(input1))
  ? arr.push([Number(input1)])
  : alert("Было введено не целое число, попробуйте еще раз");

let input2 = prompt("Укажите второе число");

Number.isInteger(Number(input2))
  ? arr.push([Number(input2)])
  : alert("Было введено не целое число, попробуйте еще раз");

let input3 = prompt("Укажите второе число");

Number.isInteger(Number(input3))
  ? arr.push([Number(input3)])
  : alert("Было введено не целое число, попробуйте еще раз");

console.log(Math.max(...arr));
alert(`наибольшее число ${Math.max(...arr)}`);
