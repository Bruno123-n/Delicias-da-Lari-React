function Cart({ carrinho }) {
    if (carrinho.length === 0) {
        return ( 
            <div className="cart">
                <h2>🛒 Carrinho</h2>
                <p>Seu carrinho está vazio.</p>
            </div>
        )
    }
    return (
        <div className="cart">
            <h2>🛒 Carrinho</h2>

            {carrinho.map((produto) => (
            <p key={produto.id}
            >
                {produto.nome}
            </p>
            
            ))}
        </div>
    )
}

export default Cart