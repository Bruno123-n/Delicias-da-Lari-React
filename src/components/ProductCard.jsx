function ProductCard({ produto, onSelecionar }) {
  // Função que será chamada ao clicar no botão
 const handleComprar = () => {
  onSelecionar(produto)
}

  return (
    <div className="produto" style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", textAlign: "center" }}>
      <img src={produto.imagem} alt={produto.nome} style={{ borderRadius: "8px" }} />
      <h3>{produto.nome}</h3>
      {/* toLocaleString formata o número para o padrão de moeda brasileiro */}
      <p>R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
      
      <button onClick={handleComprar} style={{ backgroundColor: "#e11d48", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Comprar
      </button>
    </div>
  )
}

export default ProductCard
