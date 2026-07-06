import formatPrice from "../utils/formatPrice"


function Cart({ carrinho }) {

    const total = carrinho.reduce((acumulador, produto) => {
        return acumulador + produto.preco * produto.quantidade
    },0)

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
                <div key={produto.id}>

                    <p>
                        {produto.nome}
                    </p>
                    <p>
                        Quantidade: {produto.quantidade}
                    </p>
                    <p>
                        {formatPrice(produto.preco)}
                    </p>

                </div>
            
            ))}

            <p>
                Total: {formatPrice(total)}
            </p>

        </div>
    )
}

export default Cart