import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import produtos from "./data/produtos";
import CategoryFilter from "./components/CategoryFilter";
import Cart from "./components/Cart";
import "./App.css";

function App() {

  const [categoria, setCategoria] = useState("Todos");

  const [busca, setBusca] = useState("");

  const [produtoSelecionado, setProdutoSelecionado] = useState(null);


  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");

  return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  useEffect(() => {

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  const produtosFiltrados = produtos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(busca.toLowerCase()) &&
      (categoria === "Todos" || produto.categoria === categoria),
  );

  function adicionarAoCarrinho(produto) {
  setCarrinho((carrinhoAtual) => {

    const produtoEncontrado = carrinhoAtual.find(
      (item) => item.id === produto.id
    );

    if (produtoEncontrado) {
      return carrinhoAtual.map((item) => {
        if (item.id === produto.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1,
          };
        }

        return item;
      });
    }

    return [
      ...carrinhoAtual,
      {
        ...produto,
        quantidade: 1,
      },
    ];
  });
}

  function diminuirQuantidade(id) {
    const itemEncontrado = carrinho.find((item) => item.id === id);

    if (!itemEncontrado) return;

    if (itemEncontrado.quantidade > 1) {
      setCarrinho(
        carrinho.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantidade: item.quantidade - 1,
            };
          }

          return item;
        }),
      );
    } else {
      setCarrinho(carrinho.filter((item) => item.id !== id));
    }
  }

  function limparCarrinho() {
    if (confirm("Tem certeza que deseja remover tudo no carrinho?")) {
      setCarrinho([]); 
  }
}
  function removerItem(id) {
    if (confirm("Tem certeza que deseja remover este item?")) {
      setCarrinho(carrinho.filter((item) => item.id !== id));
    }
  }

  const totalHeader = carrinho.reduce((acumulador, produto) => {
    return acumulador + produto.quantidade;
  }, 0);

  return (
    <div className="app">
      <div className="container">
        <header className="header-container">
          <span>🛒 Carrinho: {totalHeader}</span>
          <h1>Delícias da Lari 🍰</h1>
          <p>Doces artesanais feitos com carinho</p>
        </header>

        <SearchBar busca={busca} setBusca={setBusca} />

        <CategoryFilter categoria={categoria} setCategoria={setCategoria} />

        <ProductList
          produtos={produtosFiltrados}
          onSelecionar={setProdutoSelecionado}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />

        <Cart
          carrinho={carrinho}
          diminuirQuantidade={diminuirQuantidade}
          adicionarAoCarrinho={adicionarAoCarrinho}
          limparCarrinho={limparCarrinho}
          removerItem={removerItem}
        />

        {produtoSelecionado && (
          <Modal
            produto={produtoSelecionado}
            onFechar={() => setProdutoSelecionado(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
