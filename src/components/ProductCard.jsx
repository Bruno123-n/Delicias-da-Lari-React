import "./ProductCard.css"

function ProductCard({ produto, onSelecionar }) {
  // Função que será chamada ao clicar no botão
 const handleComprar = () => {
  onSelecionar(produto)
}

  return (
    <div className="produto">
      <img src={produto.imagem} alt={produto.nome}/>
      <h3>{produto.nome}</h3>
      {/* toLocaleString formata o número para o padrão de moeda brasileiro */}
      <p>R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
      
      <button onClick={handleComprar}>
        Comprar
      </button>
    </div>
  )
}

export default ProductCard
