let textoJSON = '{"produto": "Teclado","preco": 119.90,"estoque": 80,"categorias": ["periféricos", "tecnologia"]}';

let acessorio = JSON.parse(textoJSON);

console.log(acessorio)
console.log(acessorio.produto)
console.log(textoJSON)