// Переписать консольное приложение из предыдущего юнита на классы.

class Device {
    constructor(_power, lamp){
        this._power = _power,
        this.lamp = lamp 
    
    }
    // static elmech {
    //     console.log('computer')
    // }
    getInfo() {
    console.log(`Power is ${_рower} watt`);
   }
 }

class GamingComputer {
    constructor(_property, computer){
        this._property = _property,
        this.computer = computer
       
    }
    great(){
    console.log(`Device power is ${_property} watt`)
    }
}

// const newLocal = new Device();
// let _property = newLocal

// const сomputer = new GamingComputer('сomputer', 'displey');
// const lamp = new Device('lamp')

// lamp.getInfo(_power = 100);
// сomputer.great(300);
console.log(Device);
console.log(GamingComputer);
//Вышел на работу и страшно стал отставать, перебрал и так и этак что-то идет не так 
//Bсё что смог сделать


