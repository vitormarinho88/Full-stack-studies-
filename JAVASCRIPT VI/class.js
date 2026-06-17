/*
const person = {
    name: "LUKA",
    age: 28,
    talk: function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}
*/



class Person {
    constructor(name , age , profile , bike){
       console.log(`Testando exemplo com ${name} , tenho ${age} , trabalho como ${profile} e meu sonho é ter uma ${bike} `)
    
       this.name = name
       this.age = age
       this.profile = profile
       this.bike = bike
    }
    talk() {
        console.log(`Oi, me chamo ${this.name} , tenho ${this.age} anos e trabalho como ${this.profile} meu sonho é ter uma casa nova e ter uma ${this.bike}`)
    }
}

const newPerson = new Person("Vitor", 28 , "Programador" , "ZX10RR")

newPerson.talk()