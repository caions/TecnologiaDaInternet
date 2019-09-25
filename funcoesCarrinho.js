arrayDeProdutos = JSON.parse(localStorage.getItem('arrayDeProdutos'))

console.log(arrayDeProdutos[0].quantidadeItensComprados)

var corpoTabela = document.querySelector("#corpo-tabela")

for(let i = 0; i < arrayDeProdutos.length; i++){
    if(arrayDeProdutos[i].quantidadeItensComprados > 0){
        var produtoTr = document.createElement("tr")
        var descricaoTd = document.createElement("td")
        var precoTotalTd = document.createElement("td")
        var quantidadeItensTd = document.createElement("td")
        
        descricaoTd.textContent = arrayDeProdutos[i].descricao
        precoTotalTd.innerHTML = (arrayDeProdutos[i].quantidadeItensComprados * arrayDeProdutos[i].precoPor)
        quantidadeItensTd.innerHTML = arrayDeProdutos[i].quantidadeItensComprados

        produtoTr.appendChild(descricaoTd)
        produtoTr.appendChild(precoTotalTd)
        produtoTr.appendChild(quantidadeItensTd)

        corpoTabela.appendChild(produtoTr)
    }    
}

if(corpoTabela.childElementCount == 0){
    var descricaoTd = document.createElement("td")
    var produtoTr = document.createElement("tr")
    const frase = 'Nenhum produto foi colocado no carrinho'
    descricaoTd.textContent = frase
    produtoTr.appendChild(descricaoTd)
    descricaoTd.setAttribute("colspan", "3")
    corpoTabela.appendChild(produtoTr)
}