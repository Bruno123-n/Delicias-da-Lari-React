import { useState } from "react"
import Modal from "./components/Modal"
import SearchBar from "./components/SearchBar"
import ProductList from "./components/ProductList"
import produtos from "./data/produtos"
import CategoryFilter from "./components/CategoryFilter"
import Cart from "./components/Cart"
import "./App.css"

function App() {

  const [categoria, setCategoria] = useState("Todos")
  const [busca, setBusca] = useState("")
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const [carrinho, setCarrinho] = useState([])

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase()) && 
    (
      categoria === "Todos" || 
      produto.categoria === categoria
    )
  )


  function adicionarAoCarrinho(produto) {
    const produtoEncontrado = carrinho.find((item) => item.id === produto.id) 
    
     if (produtoEncontrado) {

        setCarrinho(

            carrinho.map((item) => {

                if (item.id === produto.id) {

                    return {
                        ...item, quantidade: item.quantidade + 1
                    }

                }

                return item

            })

        )

    } else {
      setCarrinho([
        ...carrinho,

        {
            ...produto,
            quantidade: 1
        }
      ])

    }

    // console.log({
    //   produto,
    //   produtoEncontrado,
    //   carrinho
    // })
  }


  function diminuirQuantidade(id) {

    const itemEncontrado = carrinho.find((item) => item.id === id)

    console.log({
    idRecebido: id,
    itemEncontrado
    })

    if (itemEncontrado.quantidade > 1) {

          setCarrinho(

              carrinho.map((item) => {

                  if (item.id === id) {

                      return {

                        ...item,
                        quantidade: item.quantidade - 1
                            
                      }

                  }

                  return item

              })

          )

    } else {

      setCarrinho(

        carrinho.filter((item) => item.id !== id)


        )
    }

      // console.log({
      //   id,
      //   itemEncontrado,
      //   carrinho
      // })
  }

  


  return (
    <div className="app">

      <div className="container">

        <header className="header-container">
          <span>🛒 Carrinho: {carrinho.length}</span>
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
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
        
        <Cart 
          carrinho={carrinho} 
          diminuirQuantidade={diminuirQuantidade}
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