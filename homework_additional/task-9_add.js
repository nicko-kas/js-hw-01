// Написати гру камінь ножиці папір. Де компютер загадує своє
//               значення потім користувач вводить свій варіант і далі ми бачимо
//               результат на екпані хто виграв

let ran = Math.floor(Math.random() * 3);
let arr = ["камень", "ножницы", "бумага"];
let userGuess = prompt("Камень, ножницы, или бумага?");
userGuess = userGuess.toLowerCase();

if (userGuess == arr[ran]) {
  alert(`Ничья, компьютер загадал ${arr[ran]}`);
} else if (userGuess == "камень" && arr[ran] == "бумага") {
  alert(`Ты проиграл, компьютер загадал ${arr[ran]}`);
} else if (userGuess == "ножницы" && arr[ran] == "камень") {
  alert(`Ты проиграл, компьютер загадал ${arr[ran]}`);
} else if (userGuess == "бумага" && arr[ran] == "ножницы") {
  alert(`Ты проиграл, компьютер загадал ${arr[ran]}`);
} else if (arr.includes(userGuess)) {
  alert(`Ты выиграл, компьютер загадал ${arr[ran]}`);
}
