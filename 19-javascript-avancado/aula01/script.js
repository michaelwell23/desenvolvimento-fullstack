/**
 * Escopo detrmina a visibilidade de uma variável
 * Há dois tipos de escopo: global e local
 *
 * Escopo local são variáveis que são declarado dentro de um escopo limitado por chaves
 * Escopo global são variábeis que são declaradas fora de de um bloco de chaves e pode ser acessível em toda parte do código
 */

let a = 2390;
console.log(a); //variável de escopo global.

function teste() {
  let a = 123;
  console.log(a); // variável de escopo local.
}

teste();
