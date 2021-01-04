/*Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:
Если нажали Cancel, записать в message строку 'Отменено пользователем!'
В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
После всех проверок вывести в alert значение переменной message.
const ADMIN_PASSWORD = 'adminpass';
let message;*/

let message;
const ADMIN_PASSWORD='adminpass';
let userInput=prompt('Введите пароль');

if (userInput===null) {
    message='Отменено пользователем!';
} else if (userInput===ADMIN_PASSWORD) {
    message='Добро пожаловать!';
} else {
    message='Доступ запрещен, неверный пароль!';
};

alert(message);
console.log(message);



// Выводим для пользователя
// console.log('Test');
// alert('Danger message');

// Получать данные от пользователя
// prompt
// confirm


// let userAnsver = confirm('Are you sure?') // true / false
// console.log(userAnsver)

// let result = prompt('Сколько тебе лет?'); userinput / null
// console.log(result)




