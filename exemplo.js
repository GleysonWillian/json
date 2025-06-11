let produto = {
    produto: "mouse",
    preco: 89.99,
    estoque: 150,
    categorias: ["tecnologia", "acessórios"]
};

let jsonProduto = JSON.stringify(produto);
console.log(jsonProduto);