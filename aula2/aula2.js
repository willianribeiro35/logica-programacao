let listaDeCopra = ["arroz","feijão","açucar","macarão","manteiga","oleo","leite"];

let pessoa = {
    nome: "Willian Ribeiro Da Silva Mendes",
    idade:35,
    profissao: "Pedreiro"

}
console.log(pessoa)
function imprimirLista(lista){
    for(let i=0; i <= lista.length; i++ ){
        console.log(lista[i]);
    }
}