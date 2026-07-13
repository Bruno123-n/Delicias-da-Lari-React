import formatPrice from "../utils/formatPrice"
import "./Cart.css"
import gerarMensagemWhatsApp from "../utils/gerarMensagemWhatsApp"
import CartSummary from "./CartSummary"



function Cart({ carrinho, diminuirQuantidade, adicionarAoCarrinho,limparCarrinho,removerItem }) {

    const total = carrinho.reduce((acumulador, produto) => {
        return acumulador + produto.preco * produto.quantidade
    },0)

    const totalItens = carrinho.reduce((acumulador, produto) => {
        return acumulador + produto.quantidade
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

            {carrinho.map((produto) => {

                const subtotal = produto.preco * produto.quantidade;

                return(
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
                            subtotal: {formatPrice(subtotal)}
                        </p>
                        <button
                            onClick={() => removerItem(produto.id)}
                        >
                            remover item
                        </button>
                    </div>

                </div>
            
                )

            })}

            <CartSummary
                total={total}
                totalItens={totalItens}
            />

            <button
                className="limparCarrinho"
                onClick={limparCarrinho}
            >
                limpar carrinho
            </button>

            <button type="submit"
                onClick={() => gerarMensagemWhatsApp(carrinho)}
            >
                Finalizar o pedido
            </button>

        </div>
    )
}

export default Cart