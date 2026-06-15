/* THIS 

No javascript , o this faz a referencia:

Node => module.exports
web  => Window

Escopo:
       => Global -> Quando começamos a escrever nossa aplicação.
          No contexto global, o this faz referencia ao objeto global,
          que é o objeto window no navegador de internet ou ao global no 
          NODE.JS
       => Local -> Por exemplo , dentro de uma função
*/







const name = "vitor" //ESCOPO GLOBAL -> Referencia ao module.exports

const person = {  // ESCOPO LOCAL , se chamar o this  nessa função com objeto. Ele faz referencia do proprio objeto
    name:"Vitor",
    age:28,
    talk: function(){
        console.log(this.name)
    }
}


function myFunction() {  // se chamar o this , sem referencia ao objeto na function , ele vira global
   this.console.log("AGORA sou global")  
   //console.log(this)  
}

myFunction()