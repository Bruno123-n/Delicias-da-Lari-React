import "./ProductCard.css"

function ProductCard({ produto, onSelecionar }) {
  return (
    <div
      className="card"
      onClick={() => onSelecionar(produto)}
    >

      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco}</p>
      
    </div>
  )
}

export default ProductCard
