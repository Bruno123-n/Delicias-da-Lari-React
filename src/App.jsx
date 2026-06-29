import { useState } from "react"
import Modal from "./components/Modal"
import SearchBar from "./components/SearchBar"
import ProductList from "./components/ProductList"
import produtos from "./data/produtos"
import "./App.css"

function App() {

  const [categoria, setCategoria] = useState("Todos")
  const [busca, setBusca] = useState("")
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase()) && 
    (
      categoria === "Todos" || 
      produto.categoria === categoria
    )
  )

  



  return (
    <div className="app">

      <div className="container">

        <header className="header-container">
          <h1>Delícias da Lari 🍰</h1>
          <p>Doces artesanais feitos com carinho</p>
        </header>

        <SearchBar busca={busca} setBusca={setBusca} />

        <div className="categorias">

          <button id="1" onClick={() => setCategoria("Todos")}>Todos</button>

          <button id="2" onClick={() => setCategoria("Bolos")}>Bolos</button>

          <button id="3" onClick={() => setCategoria("Pães")}>Pães</button>

          <button id="4" onClick={() => setCategoria("Doces")}>Doces</button>

        </div>

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

    </div>
  )
}

export default App