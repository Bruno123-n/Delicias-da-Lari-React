import formatPrice from "../utils/formatPrice"
import ProductRating from "./ProductRating";
import "./ProductCard.css"


function ProductCard({ produto, onSelecionar, adicionarAoCarrinho }) {
  return (
    <div
      className="card" 
    >

      <img 
        src={produto.imagem} 
        alt={produto.nome} 
      />

      <h3>
        {produto.nome}
      </h3>

      <ProductRating avaliacao={produto.avaliacao}/>

      <p className="description">
        {produto.descricao}
      </p>

      <p className="price">
          {formatPrice(produto.preco)}
      </p>

      <button 
        onClick={() => onSelecionar(produto)}
      >
        Ver detalhes
      </button>

      <button 
        onClick={() => adicionarAoCarrinho(produto)}
      >
        Adicionar ao carrinho
      </button>
      
    </div>
  )
}

export default ProductCard
