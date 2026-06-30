function formatPrice(preco){
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    
}

export default formatPrice