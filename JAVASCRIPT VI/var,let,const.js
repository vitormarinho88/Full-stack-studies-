//VAR -> Utilização atualmente bem escassa, mais utilizada antigamente
//CONST -> VARIAVEL CONSTANTE, NAO SE ALTERA O VALOR. 

const myConst = "Hei"
let myLet = "Olá"
var myVar = "Hello"

if (true) {
   
    const myConst = "Hei"

}
console.log(myConst)//VAI DA ERRO 


//CONST NAO PODE ATRIBUIR UM NOVO VALOR PARA A VARIAVEL CONST, MAS PODE TROCAR VALORES DAS PROPRIEDAS INTERNAS DA VARIEVAL
const name = {nome:"Vitor"}
name.name = "Marinho"
console.log(name)


//EX
let shai = {player:"Alexander"}
shai.name = "OKC"
console.log(shai)


//let pode alterar a variavel , nao tem restriçoes como a constante 
let doncic = "luka"
doncic = "lakers"
console.log(doncic)