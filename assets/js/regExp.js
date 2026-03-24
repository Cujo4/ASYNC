'use strict';

// // i - ищет слово независимо от регистра (Выводит только первое);
// // g - ищет слово по всей строке и выводит все;
// // . - один любой символ;

// // regExp = new regExp(шаблон, флажки);
// const regExp1 = new RegExp('qwerty', 'i');

// // const regExp2 = /шаблон\флажки;
// const regExp2 = /qwerty/g;
// // Флажок i - независимость от регистра.

// console.log('qwerty => ', regExp2.test('ytewfgagQwertyytgcyewfgvb'));

// console.log(console.log('qwerty1 :>> ', '143423qwertyysefdcgqwertyshdgu52352736'.match(regExp2)));

// // Границы
// // ^ - Начало строки
// // $ - Конец строки
// // \b - Граница слова
// // \B - Не граница слова

// console.log('qwerty.match(/^qwerty$/) :>> ', 'qwerty'.match(/^qwerty$/));

// console.log('test 2 => ', 'Qwertyyetfcgvb22'.match(/^qwerty/i));

// console.log('"my dog is cute".match(/\bdog\b/) :>> ', "my dog is cute".match(/\bdog\b/i));

// console.log('"my hotdog is cute".match(/\bdog\b/) :>> ', "my hotdog is cute".match(/\bdog\b/i));

// console.log('qwerty :>> ', "qwerty".match(/^qw..ty$/i));
// console.log('qwerty :>> ', "qw44ty".match(/^qw..ty$/i));

// console.log('"111cujo" :>> ', "111Cujo".match(/\b111....\b/i));

// // Квантификаторы
// // {8}
// // {1, 10}
// // + - {1,}
// // * - {0,}
// // ? - {0,1}

// console.log('"111cujo" :>> ', "111Cujo".match(/\b1{3}.{4}\b/i));


// console.log('Test Email => ', '11@qwertya'.match(/^.{1,10}@.{1,10}$/));

// ////////////

// // Альтернативные символы / только один вид символов

// // [0123456789] = [0-9] = \d - Цифры.
// // [a-z] - Маленькие буквы.
// // [A-Z] - Большие буквы.
// // [a-zA-Z] - Большие и Маленькие буквы.
// // [a-zA-Z0-9_] = \w - Любые символы слова.
// // \D = ^\d  ||||| \W = ^\w - Отрицание.
// // \s - Пробел.
// // \S - Не пробел.

// console.log('Numbers Only => ', '12345'.match(/^[0123456789]+$/));

// // ИЛИ

// console.log('Numbers Only => ', '12345'.match(/^[0-9]+$/));
// // ИЛИ

// console.log('Numbers Only => ', '12345'.match(/^\d+$/));

// ////////////

// console.log('Tel.Number => ', '+380-96-272-6023'.match(/^\+380-\d{2}-\d{3}-\d{4}$/));

// /////////////

// // Альтернативные слова

// console.log('Alt Test => ', 'I like cats'.match(/\b(cat|dog)s?\b/));

// /////////////

// console.log('I say "yes", but think and say "no"'.match(/".*?"/g));

// console.log('I bought 10 apple by 1$'.match(/\d+(?=\$)/g));


// console.log('Qq1.qqqq'.match(/^(?=.*[A-Z].*).{8,16}$/));

// //////////////////////////////////////////////////

// console.log('Testik','uysfguisf wufhb wuecb wuefgh'.split(' ') );


// console.log('Testik1', 'weytfeyjg uegfwegfu      weufuea      weiuaf             wifehiuefhklejadd'.replace(/\s{2,}/g, ' '));


// console.log('Matyki => ', 'Fuck you )))) You are asshole'.replace(/\b(f+u+c+k+|a+s+s+|a+s+s+h+o+l+e+)\b/ig, '!@#$'));


// console.log('Data => ', '2002:03-16'.split(/-|\/|\.|:/g));

///////////////////////////////////////////////////





