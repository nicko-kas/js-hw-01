// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function compareLength(a, b) {
  return b.length - a.length;
}

const findLongestWord = function (string) {
  return string.split(" ").sort(compareLength)[0];
};

//  /*
//   * Вызовы функции для проверки работоспособности твоей реализации.
//   */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
