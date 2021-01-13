/* Написати програму яка буде знаходити суму, різницю, добуток,
              частрку двох чисел Користувач вводить 2 числа потім вводить знак
              операції і отримує результат в форматі "Сума чисел a i b =
              результат" (такий шаблон для кожної відповіді)*/

let value_a = prompt("Введите первое число");
let value_b = prompt("Введите второе число");
let operator = prompt("Выберите операцию: + или - иил *");
let result;
let msg;

if (operator === "*") {
  result = value_a.replace(",", ".") * value_b.replace(",", ".");
  console.log(result);
  console.log(operator);
  msg = `Произведение чисел ${value_a} и ${value_b} = ${result}`;
  console.log(msg);
  alert(msg);
} else if (operator === "-") {
  result = value_a.replace(",", ".") - value_b.replace(",", ".");
  alert(`Разница чисел ${value_a} и ${value_b} = ${result}`);
} else if (operator === "+") {
  result =
    Number(value_a.replace(",", ".")) + Number(value_b.replace(",", "."));
  alert(`Сумма чисел ${value_a} и ${value_b} = ${result}`);
} else {
  alert(`Выбранная операция ${operator} не является : + или - иил *`);
}
