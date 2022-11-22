// Написать, функцию, которая принимает в качестве аргумента объект
//  и выводит в консоль все ключи и значения только собственных свойств.
//  Данная функция не должна возвращать значение.

const names = {
    1: "Oleg",
    2: "Piter",
}
const newLocal = "Piter";
const key = newLocal;
function func(_names) {
    return (key in names);
}
console.log(key);