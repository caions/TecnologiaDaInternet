

for(let i = 0; i < arrayDeProdutos.length; i++){
    btnAdicionarCarrinho[i].addEventListener("click", function(e)
    {
        e.preventDefault()
        arrayDeProdutos[i].quantidadeItensComprados++
        console.log(arrayDeProdutos[i].quantidadeItensComprados)
    })
}