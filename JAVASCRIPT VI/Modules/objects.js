function sum(firstNumber, seccondNumber){
    return firstNumber + seccondNumber
}

function multi(firstNumber, seccondNumber){
    return firstNumber + seccondNumber
}

const person  =  {
    name: "VITOR MARINHO",
    age:28,
    talk:function(){
        console.log("HELLOU WORLD");
    }
}

//module.exports = {sum , multi , person}

this.person = person
this.sum = sum