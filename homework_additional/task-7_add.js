// Написати програму яка переведе введену оцінку студента до
//               болонського формату 89 - 100 це A 75 - 88 це В 60 - 74 це С 45 -
//               59 це D 20 - 44 це Е до 20 це F

let score = prompt("Укажите оценку");

if (Number(score) <= 100 && Number(score) > 88) {
  alert("Оценка - А");
} else if (Number(score) <= 88 && Number(score) > 74) {
  alert("Оценка - B");
} else if (Number(score) <= 74 && Number(score) > 59) {
  alert("Оценка - C");
} else if (Number(score) <= 59 && Number(score) > 44) {
  alert("Оценка - D");
} else if (Number(score) <= 44 && Number(score) > 19) {
  alert("Оценка - E");
} else if (Number(score) <= 19) {
  alert("Оценка - F");
} else {
  alert("Не поддерживается");
}
