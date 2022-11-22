// Написать функцию, которая создает пустой объект, но без прототипа.

function emptyObjkl(_Object) {
     _Object = {};//coздаем пустой объект
     return _Object;
}
const objectNew = emptyObjkl('testObj');
console.log(objectNew);//{}