//имя_функции('проверяемая строка', 20); Результат: true - строка проходит по длине
//функция принимает слово или фразу и количество символов, проверяет, соответствует ли слово количеству символов указанному в аргументе, если да - true, если нет - false

/*
let phrase = '';
let length = 0;

let phraseLength = function (phrase, length) {
  if (phrase.length == length) {
    return true;
  } else {
    return false;
  }
}
*/

/*console.log(phraseLength('girlfriend', 12));*/

//имя_функции('проверяемая строка', 18); Результат: true - строка проходит по длине

/*
let phrase2 = '';
let length2 = 0;

let phraseLength2 = function (phrase2, length2) {
  if (phrase2.length == length2) {
    return true;
  } else {
    return false;
  }
}
*/

/*console.log(phraseLength2('girlfriend', 18));*/

//имя_функции('проверяемая строка', 10); Результат: false — строка не проходит

/*
let phrase3 = '';
let length3 = 0;

let phraseLength3 = function (phrase3, length3) {
  if (phrase3.length == length3) {
    return true;
  } else {
    return false;
  }
}
*/

/*console.log(phraseLength3('girlfriend', 10));*/

//Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
//имя_функции('топот'); Результат: true - строка является палиндромом
/*
let newString = '';

let reverseString = function (string) {

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  if (string.toLowerCase == newString.toLowerCase) {
    return true;
  } else {
    return false;
  }
}
/*console.log(reverseString('топот'))*/

//имя_функции('ДовОд'); Результат: true - несмотря на разный регистр, тоже палиндром

/*
let newString = '';

let reverseString = function (string) {

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  if (string.toLowerCase == newString.toLowerCase) {
    return true;
  } else {
    return false;
  }
}
console.log(reverseString('ДовОд'))
*/

//имя_функции('Кекс'); Результат: false - это не палиндром

/*
let newString = '';

let reverseString = function (string) {

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  if (string.toLowerCase() == newString.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(reverseString('Кекс'))

*/


//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
//Если в строке нет ни одной цифры, функция должна вернуть NaN:
//имя_функции('2023 год');            Результат: число 2023

/*
function retractNumber(string) {
  let number = string.replace(/[^0-9]/g, '');
  return parseInt(number, 10);
}

console.log(retractNumber('2023 год'))
*/


//имя_функции('ECMAScript 2022');     Результат: число 2022

/*
function retractNumber(string) {
  let number = string.replace(/[^0-9]/g, '');
  return parseInt(number, 10);
}

console.log(retractNumber('ECMAScript 2022'))
*/


//имя_функции('1 кефир, 0.5 батона'); Результат: число 105

/*
function retractNumber(string) {
  let number = string.replace(/[^0-9]/g, '');
  return parseInt(number, 10);
}

console.log(retractNumber('1 кефир, 0.5 батона'))
*/



//имя_функции('а я томат');           Результат: NaN

/*
function retractNumber(string) {
  let number = string.replace(/[^0-9]/g, '');
  return parseInt(number, 10);
}

console.log(retractNumber('а я томат'))
*/


/*
Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.Символы добавляются в начало строки.Если исходная строка превышает заданную длину, она не должна обрезаться.Если «добивка» слишком длинная, она обрезается с конца.

Эта функция нам пригодится для формирования адресов файлов.Примеры её использования:
*/
// Добавочный символ использован один раз
//имя_функции('1', 2, '0');      Результат: строка '01'

// 1. Если initString.length меньше stringLength то добавляем символы из stringAddition до заданной длины строки
// 2. Символы stringAddition добавляются в начало строки initString
// 3. Если initString.length больше stringLength мы еe не обрезаем
// 4. Eсли stringAddition слишком длинный что бы добавить полностью то обрезаем с конца (например ('q', 4, 'we') Результат: строка 'wweq' то есть мы добавили 1 раз в начало строки q строку we полностью, затем что бы добавить 4 символ обрезали строку we с конца до 1 символа)

let initString = '';
let stringLength = 0;
let stringAddition = '';
let finalString = '';
let finalString2 = '';
let finalLength = '';
let finalLength2 = '';
let stringAdditionCut = '';


let stringConstructor = function (initString, stringLength, stringAddition) {
  //пока длина первого даннного не сравняется с длиной указанной во втором данном, добавляй дополнительные символы в начало столько раз, сколько указано в длине строки (stringLength)
  while (initString.length < stringLength) {
    finalLength = stringAddition.repeat(stringLength - 1)
    //далее, если все количество добавок суммарно больше заданной длины, каждая добавка обрезается с конца до того состояния чтобы быть равной заданной длине
    if (finalLength > stringLength) {
      //далее, если суммарная добавка больше заданной длины, каждая добавка обрезается с конца до того состояния чтобы быть равной заданной длине
      stringAdditionCut = stringAddition - 1;
      finalLength2 = stringAdditionCut.repeat(stringLength - 1)
      return finalString2 = finalLength2 + initString;
      }
    return finalString = finalLength + initString;
    }
}

console.log(stringConstructor('q', 3, 'we'))

/*

// Добавочный символ использован три раза
имя_функции('1', 4, '0');      // Результат: строка '0001'

// Добавочные символы обрезаны с конца
имя_функции('q', 4, 'werty');  // Результат: строка 'werq'

// Добавочные символы использованы полтора раза
имя_функции('q', 4, 'we');     // Результат: строка 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
имя_функции('qwerty', 4, '0'); // Результат: строка 'qwerty'
Попробуйте не использовать при этом функцию padStart() =)
*/
