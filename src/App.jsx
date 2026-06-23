import { useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/Modal";

function App() {
  // Lista de produtos (pode vir de um banco de dados ou API depois)
  const produtos = [
    { id: 1, nome: "Bolo de Chocolate", preco: 15.00, imagem: "https://picsum.photos/150" },
    { id: 2, nome: "Bolo de Cenoura", preco: 12.50, imagem: "https://picsum.photos/150" },
    { id: 3, nome: "Brigadeiro Gourmet", preco: 3.00, imagem: "https://picsum.photos/150" }
  ];

  const [contador, setContador] = useState(0)
  const [busca, setBusca] = useState("")
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  )

  // console.log(produtoSelecionado)

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Delícias da Lari 🍰</h1>
      
      
      {/* Container para organizar os cards lado a lado */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", // Centraliza horizontalmente
        alignItems: "center",     // Alinha verticalmente se necessário
        gap: "20px", 
        flexWrap: "wrap",
        marginTop: "30px"
       }}>

        <h2>Cliques: {contador}</h2>

        <button onClick={() => setContador(contador + 1)}>
          Clique aqui
        </button>

        <input
          type="text"
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar produto..."
        />

        {produtosFiltrados.map((produto) => (
          <ProductCard
            key={produto.id} // O React exige uma chave única para listas
            produto={produto}
            onSelecionar={setProdutoSelecionado}
            />
          ))}
      </div>
          {produtoSelecionado && (
            <Modal
              produto={produtoSelecionado}
              onFechar={setProdutoSelecionado}
            />
          )}
    </div>
  )
}

export default App
