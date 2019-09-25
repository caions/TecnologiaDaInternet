var celular1 = {
    descricao: 'moto g7',
    descricaoDestalhada: 'Smartphone Motorola Moto G7 Play 32GB Dual Chip Android Pie - 9.0 Tela 5.7" 1.8 GHz Octa-Core 4G Câmera 13MP - Indigo',
    precoDe: 899.00,
    precoPor: 699.00,
    parcelamento: 'em 10x sem juros',
    quantidadeItensComprados: 0 
}

var celular2 = {
    descricao: 'Motorola one',
    descricaoDestalhada: ' Smartphone Motorola One 64GB Dual Chip Android Oreo 8.1 Tela 5.9" 2.0 GHz Octa-Core Qualcomm 4G Câmera 13 + 2MP (Dual Traseira) - Preto',
    precoDe: 989.00,
    precoPor: 934.00,
    parcelamento: 'em 10x sem juros',
    quantidadeItensComprados: 0
}

var celular3 = {
    descricao: 'Samsung Galaxy J8',
    descricaoDestalhada: ' Smartphone Samsung Galaxy J8 64GB 16MP Tela 6 Preto SM J810M',
    precoDe: 1356.90,
    precoPor: 1129.00,
    parcelamento: 'em 10x sem juros',
    quantidadeItensComprados: 0
}

var celular4 = {
    descricao: 'moto g7',
    descricaoDestalhada: 'Smartphone Motorola Moto G7 Play 32GB Dual Chip Android Pie - 9.0 Tela 5.7" 1.8 GHz Octa-Core 4G Câmera 13MP - Indigo',
    precoDe: 899,
    precoPor: 699,
    parcelamento: 'em 10x sem juros',
    quantidadeItensComprados: 0
}

var celular5 = {
    descricao: 'moto g7',
    descricaoDestalhada: 'Smartphone Motorola Moto G7 Play 32GB Dual Chip Android Pie - 9.0 Tela 5.7" 1.8 GHz Octa-Core 4G Câmera 13MP - Indigo',
    precoDe: 899,
    precoPor: 699,
    parcelamento: 'em 10x sem juros',
    quantidadeItensComprados: 0
}

var btnCarrinhoDeCompras = document.querySelector("#carrinho")
var btnAdicionarCarrinho = document.querySelectorAll("#adicionar")

console.log(JSON.parse(localStorage.getItem('arrayDeProdutos')))

let arrayDeProdutos = [celular1, celular2, celular3, celular4, celular5]

if(JSON.parse(localStorage.getItem('arrayDeProdutos'))){
    arrayDeProdutos = JSON.parse(localStorage.getItem('arrayDeProdutos'))
}

function clickDoCarrinho(){
    // if(!JSON.parse(localStorage.getItem('arrayDeProdutos'))){
         localStorage.setItem('arrayDeProdutos', JSON.stringify(arrayDeProdutos))
    // }     
}


