/*JSON - JavaScript Object Notation

- Padrão de troca e armazenamento de informação
- Padrão lógico simples
- Leve para ser enviado e recebido
- Simples e facil de entender 
- Derivado do JavaScript
- Utiliza o formato chave / valor

*/


const user = {
    nome: "Vitor Marinho",
    idade: 28,
    filhos: null,
    hobbies: [ "Games", "Filmes", "Academia", "Ler" ],
    casado: false,
    empresas: {
        WarungBeachClub: {
            fundada: 2002,
            colaboradores: 4
        },
        Monster_app: {
            fundada: 2023,
            colaboradores: 4
        },
        atlas: {
            fundada: 2023,
            colaboradores: 5
        },
        agenda_sua: {
            fundada: 2023,
            colaboradores: 5
        }
    }
}


//CONVERTER OBJETOS PARA *JSON* USA = (stringfy)
//CONVERTER JSON PARA *OBJETOS* USA = (PARSE)

const userJson = JSON.stringify(user)
const userJsonToJs = JSON.parse(userJson)

console.log(userJsonToJs) 