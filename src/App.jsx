import { useState } from "react"
import Modal from "./components/Modal"
import SearchBar from "./components/SearchBar"
import ProductList from "./components/ProductList"
import produtos from "./data/produtos"
import CategoryFilter from "./components/CategoryFilter"
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

        <CategoryFilter
            categoria={categoria}
            setCategoria={setCategoria}
        />

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