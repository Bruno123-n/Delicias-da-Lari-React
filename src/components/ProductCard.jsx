import formatPrice from "../utils/formatPrice"
import "./ProductCard.css"

function ProductCard({ produto, onSelecionar }) {
  return (
    <div
      className="card"
      onClick={() => onSelecionar(produto)}
    >

      <img 
        src={produto.imagem} 
        alt={produto.nome} 
      />

      <h3>
        {produto.nome}
      </h3>

      <p className="rating">
        ⭐ Avaliação: {produto.avaliacao}
      </p>

      <p className="description">
        {produto.descricao}
      </p>

      <p className="price">
          {formatPrice(produto.preco)}
      </p>

      <button>
        Ver detalhes
      </button>
      
    </div>
  )
}

export default ProductCard
