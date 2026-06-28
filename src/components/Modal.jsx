function Modal({ produto, onFechar }) {
  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{produto.nome}</h2>
        <img src={produto.imagem} alt={produto.nome} />
        <p>Preço: R$ {produto.preco}</p>

        <button onClick={onFechar}>
          Fechar
        </button>
      </div>
    </div>
  )
}

export default Modal