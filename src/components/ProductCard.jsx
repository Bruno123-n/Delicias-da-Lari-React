import formatPrice from "../utils/formatPrice"
import "./ProductCard.css"

const estrelas = [1, 2, 3, 4, 5]

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
        {estrelas.map((estrela) => 
          <span key={estrela}>
            {estrela <= produto.avaliacao ? "⭐" : "☆"}
          </span>
        )}
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
