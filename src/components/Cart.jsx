import { useState } from "react";
import formatPrice from "../utils/formatPrice";
import "./Cart.css";
import CartSummary from "./CartSummary";
import AddressForm from "./AddressForm";

function Cart({
  carrinho,
  diminuirQuantidade,
  adicionarAoCarrinho, 
  limparCarrinho,
  removerItem,
  finalizarPedido,
}) {
  const [endereco, setEndereco] = useState({
    cep: "",
    rua: "",
    bairro: "",
    numero: "",
    cidade: "",
    uf: "",
  });  
  const [observacaoGeral, setObservacaoGeral] = useState("");

  const total = carrinho.reduce((acumulador, produto) => {
    return acumulador + produto.preco * produto.quantidade;
  }, 0);

  const totalItens = carrinho.reduce((acumulador, produto) => {
    return acumulador + produto.quantidade;
  }, 0);

  if (carrinho.length === 0) {
    return (
      <div className="cart">
        <h2>🛒 Carrinho</h2>
        <p>Seu carrinho está vazio.</p>
      </div>
    );
  }
  return (
    <div className="cart">a
      <h2>🛒 Carrinho</h2>

      {carrinho.map((produto) => {
        const subtotal = produto.preco * produto.quantidade;

        return (
          <div key={produto.id} className="cart-item">
            <div className="descricao">
              <p className="produtoNome">{produto.nome}</p>
              <p>{formatPrice(produto.preco)}</p>
            </div>

            <div className="controles">
              <button onClick={() => diminuirQuantidade(produto.id)}>-</button>
              <p>{produto.quantidade}</p>
              <button onClick={() => adicionarAoCarrinho(produto)}>+</button>
            </div>

            <div className="subtotal">
              <p>subtotal: {formatPrice(subtotal)}</p>
              <button onClick={() => removerItem(produto.id)}>
                remover item
              </button>
            </div>
          </div>
        );
      })}

      <div className="cart-obs">
        <textarea
          placeholder="Alguma observação para o pedido? (ex: sem açúcar, entregar depois das 14h...)"
          value={observacaoGeral}
          onChange={(e) => setObservacaoGeral(e.target.value)}
          className="input-observacao"
        />
      </div>

      <CartSummary total={total} totalItens={totalItens} />

      <AddressForm
        endereco={endereco}
        setEndereco={setEndereco}
      />

      <div className="cart-actions">
        <button className="limparCarrinho" onClick={limparCarrinho}>
          limpar carrinho
        </button>
        <button
          className="finalizarPedido"
          type="submit"
          onClick={() => finalizarPedido(carrinho, endereco, observacaoGeral)}
        >
          Finalizar o pedido
        </button>
      </div>
    </div>
  );
}

export default Cart;
