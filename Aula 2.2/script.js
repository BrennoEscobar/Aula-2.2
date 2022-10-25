// o que são vetores ou arrays

//como declarar uma array
let array = ['string', 1, true];
//deve ser declarado entre colchetes "[]"
console.log(array);

//como um array pode guardar diferentes valores inclusive outros arrays
// ex: let array = ['string', 1, true, ['array1'],['array2']];

//como acessar o índice de uma array
console.log(array[0]);

//manipulando uma array
//forEach - realiza uma função para item do array
array.forEach(function(item, index){console.log(item, index);});

//push - add item no final da array
array.push('novo item');
console.log(array);

//pop - remove o último item do array
array.pop();
console.log(array);

//shift - remove o primeiro item da array
array.shift();
console.log(array);

//unshift - add item no início da array
array.unshift('novo item');
console.log(array);

//indexOF - retorna o índice de um item do array
console.log(array.indexOf(true));

//splice - remove ou substitui um item por índice
//array.splice(0, 2);
//console.log(array);

//slice - retorna umab parte de uma array existente
let novoArray = array.slice(0, 2);
console.log(novoArray);