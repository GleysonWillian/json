let textoJSON = `
[
    {"id": 1, "nome": "Samsung S25 ULTRA", "valor": 8500, "disponibilidade": true, "cores": ["cinza", "branco", "preto", "azul"]},
    {"id": 2, "nome": "iphone 15 pro max", "valor": 9650, "disponibilidade": false, "cores": ["azul", "cinza", "preto", "gold"]},
    {"id": 3, "nome": "Monitor gamer HQ", "valor": 1450, "disponibilidade": true, "cores": ["black", "pink", "silver", "red"]}
]
`;

let produtos = JSON.parse(textoJSON);

console.log(produtos);
