import { useState } from "react"
import Modal from "./components/Modal"
import SearchBar from "./components/SearchBar"
import ProductList from "./components/ProductList"
import "./App.css"

function App() {

  const produtos = [
    { id: 1, nome: "Bolo de Milho", preco: 15.00, imagem: "imagens/Bolo-de-Milho.jpeg" },
    { id: 2, nome: "Orelhinha de Gato", preco: 12.50, imagem: "imagens/Orelhinha-de-Gato.jpg" },
    { id: 3, nome: "Pão Caseiro", preco: 3.00, imagem: "imagens/Pao-caseiro.jpg" }
  ]

  const [busca, setBusca] = useState("")
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className="app">

      <header className="header-container">
        <h1>Delícias da Lari 🍰</h1>
        <p>Doces artesanais feitos com carinho</p>
      </header>

      <SearchBar busca={busca} setBusca={setBusca} />

      <ProductList
        produtos={produtosFiltrados}
        onSelecionar={setProdutoSelecionado}
      />

      {produtoSelecionado && (
        <Modal
          produto={produtoSelecionado}
          onFechar={() => setProdutoSelecionado(null)}
        />
      )}

    </div>
  )
}

export default App