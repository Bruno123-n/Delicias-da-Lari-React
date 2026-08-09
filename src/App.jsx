import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import { produtos } from "./data/produtos";
import CategoryFilter from "./components/CategoryFilter";
import Cart from "./components/Cart";
import ConfirmModal from "./components/ConfirmModal";
import gerarMensagemWhatsApp from "./utils/gerarMensagemWhatsApp";
import ProductDetails from "./components/ProductDetails";
import { useCart } from "./hooks/useCart";
import { useToast } from "./hooks/useToast";
import "./App.css";


function App() {
  const { mensagemToast, mostrarToast } = useToast();

  const [confirmacao, setConfirmacao] = useState(null);

  const [categoria, setCategoria] = useState("Todos");

  const [busca, setBusca] = useState("");

  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const {
    carrinho,
    adicionarAoCarrinho: adicionarHook,
    diminuirQuantidade,
    removerDoCarrinho,
    limparCarrinho: limparHook,
    totalItens,
    setCarrinho,
  } = useCart();
  
  function adicionarAoCarrinho(produto) {
    adicionarHook(produto);
    mostrarToast(`${produto.nome} adicionado ao carrinho! 🍰`);
  }

  function removerItem(id) {
    const itemRemovido = carrinho.find((item) => item.id === id);
    removerDoCarrinho(id);
    if (itemRemovido) {
      mostrarToast(`"${itemRemovido.nome}" foi removido do carrinho 🗑️`);
    }
  }

  function limparCarrinho() {
    abrirConfirmacao({
      titulo: "Limpar carrinho",
      mensagem: "Deseja limpar o carrinho?",
      executar: () => {
        limparHook();
        mostrarToast("Carrinho limpo com sucesso! 🧹");
      },
    });
  }
  
  function abrirConfirmacao(acao) {
    setConfirmacao(acao);
  }

  
  function finalizarPedido(carrinho, endereco, observacaoGeral) {
    abrirConfirmacao({
      titulo: "Finalizar Pedido", 
      mensagem: "Deseja finalizar o pedido",
      executar: () => {
          // 1. Mostra a notificação imediatamente
        mostrarToast("Pedido enviado para o WhatsApp! 🚀");
        
        // 2. Aguarda 2.0s para o usuário ver o aviso antes de abrir o WhatsApp
        setTimeout(() => {
          gerarMensagemWhatsApp(carrinho, endereco, observacaoGeral);
          setCarrinho([]);
        }, 2000);
      },
    });
  }

const produtosFiltrados = produtos.filter(
  (produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase()) &&
  (categoria === "Todos" || produto.categoria === categoria),
);

return (
  <div className="app">
      <div className="container">
        <header className="header-container">
          <div className="cart-badge">
            🛒 Carrinho: <span>{totalItens}</span>
          </div>
          <h1>Delícias da Lari 🍰</h1>
          <p>Doces artesanais feitos com carinho</p>
        </header>

        {produtoSelecionado ? (
          <ProductDetails
            produto={produtoSelecionado}
            onVoltar={() => setProdutoSelecionado(null)}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ) : (
          <>
            <SearchBar busca={busca} setBusca={setBusca} />

            <CategoryFilter categoria={categoria} setCategoria={setCategoria} />

            <ProductList
              produtos={produtosFiltrados}
              onSelecionar={setProdutoSelecionado}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          </>
        )}

        <Cart
          carrinho={carrinho}
          diminuirQuantidade={diminuirQuantidade}
          adicionarAoCarrinho={adicionarAoCarrinho}
          limparCarrinho={limparCarrinho}
          removerItem={removerItem}
          finalizarPedido={finalizarPedido}
        />

        {confirmacao && (
          <ConfirmModal
            titulo={confirmacao.titulo}
            mensagem={confirmacao.mensagem}
            onConfirmar={() => {
              confirmacao.executar();
              setConfirmacao(null);
            }}
            onCancelar={() => setConfirmacao(null)}
          />
        )}
        {mensagemToast && (
          <div className="toast-notificacao">{mensagemToast}</div>
        )}
      </div>
    </div>
  );
}

export default App;
