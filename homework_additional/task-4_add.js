/*Написати програму яка буде переводити температуру з цельсія в
              фаренгейти, або навпаки з фаренгейта в цельсії */

let inputCelsius;

inputCelsius = prompt (`Укажите температуру в цельсиях`);
inputCelsius ? alert(`Температура ${inputCelsius} соответсвует ${inputCelsius*1.8 +32} по фаренгейту`): alert('Значение не выбрано');

let inputFarenheit;

inputFarenheit = prompt (`Укажите температуру в фаренгейтах`);
inputFarenheit ? alert(`Температура ${inputFarenheit} соответсвует ${(inputFarenheit-32)*(5/9)} по цельсию.`) : alert('Значение не выбрано');
