import formatPrice from "../utils/formatPrice"
import "./Cart.css"


function Cart({ carrinho, diminuirQuantidade, adicionarAoCarrinho,limparCarrinho,removerItem }) {

    const total = carrinho.reduce((acumulador, produto) => {
        return acumulador + produto.preco * produto.quantidade
    },0)

    const subtotal = (produto) => produto.preco * produto.quantidade

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
                <div 
                    key={produto.id}
                    className="cart-item"
                >

                    <div className="descricao">
                        <p>
                            {produto.nome}
                        </p>
                        <p>
                            {formatPrice(produto.preco)}
                        </p>
                    </div>

                    <div className="controles">
                        <button
                            onClick={() => diminuirQuantidade(produto.id)}
                        >
                            -
                        </button>
                        <p>
                            {produto.quantidade}
                        </p>
                        <button
                            onClick={() => adicionarAoCarrinho(produto)}
                        >
                            +
                        </button>
                    </div>

                    <div className="subtotal">
                        <p>
                            subtotal: {formatPrice(subtotal(produto))}
                        </p>
                        <button
                            onClick={() => removerItem(produto.id)}
                        >
                            remover item
                        </button>
                    </div>

                </div>
            
            ))}

            <p className="total">
                Total: {formatPrice(total)}
            </p>

            <button
                className="limparCarrinho"
                onClick={() => limparCarrinho()}
            >
                limpar carrinho
            </button>

        </div>
    )
}

export default Cart