/***Задание 4**

На счету пользователя есть 35500 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).
При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:
Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
Проверяет сможет ли пользователь оплатить заказ:
если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
в противном случае необходимо посчита ть остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.*/

let credits = 35500;
let pricePerDroid = 3000;
let orderInput = prompt("Количество дройдов в заказе");

if (!orderInput) {
  console.log("Отменено пользователем!");
} else if (orderInput.length && orderInput * pricePerDroid > credits) {
  console.log("Недостаточно средств на счету!");
} else if (orderInput.length && orderInput * pricePerDroid <= credits) {
  console.log(
    `Вы купили ${orderInput} дроидов, на счету осталось ${
      credits - orderInput * pricePerDroid
    } кредитов.`
  );
} else {
  console.log("Поддерживаются только целые числа (без пробелов)");
}

/*
let credits=35500;
let pricePerDroid=3000;
let message;
let orderInput;


while (true) {
    orderInput=prompt('Количество дройдов в заказе');
    
    if (orderInput===null){
        message='Отменено пользователем!';
        alert(message);
        console.log (message);
        break;
    } else if (orderInput.length && orderInput.replace(new RegExp("[0-9]", "g"), '').length) {
        message='Поддерживаются только целые числа (без пробелов)';
        alert(message);
        console.log (message);
    } else if (!orderInput.length) {
        message='Введите значение заказа';
        alert(message);
        console.log (message);
    } else if (orderInput.length && orderInput*pricePerDroid<=credits) {
        message=`Вы купили ${orderInput} дроидов, на счету осталось ${credits-orderInput*pricePerDroid} кредитов.`;
        alert(message);
        console.log (message);
        break;
    } else if (orderInput.length && orderInput*pricePerDroid>credits) {
        message='Недостаточно средств на счету!';
        alert(message);
        console.log (message);
        break;}
}
*/
