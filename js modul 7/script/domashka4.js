// Реализуйте следующее консольное приложение подобно примеру, 
// который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку.
//  Посчитайте потребляемую мощность (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
//  Выбрав прибор, подумайте, какими свойствами он обладает.

function Device( _name){
       this.property = 'efficient',
       this._name = _name 
    }
  Device.prototype.getPower = function(_рower) {
    console.log(`Power is ${_рower} watt`)
  }
  function GamingComputer(_name, _рower){
    this._name = _name,
    this._рower = _рower
  }

  GamingComputer.prototype = new Device()

  GamingComputer.prototype.getPower = function(_рower){
  console.log(`Device power is ${_рower} watt`)
}
  const сomputer = new GamingComputer('сomputer', 'displey');
  const lamp = new Device('lamp')

  сomputer.getPower(300)//Device power is 300 watt
  lamp.getPower(100)//Power is 100 watt
  console.log(lamp)//Device {property: 'efficient', _name: 'lamp'}

