import "./Modal.css"

function Modal({ produto, onFechar }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button 
            className="modal-close"
            onClick={() => onFechar(null)}
        >
            X
        </button>

        <h2>{produto.nome}</h2>

        <img
          src={produto.imagem}
          alt={produto.nome}
        />

        <p>
          R$ {produto.preco.toLocaleString("pt-BR", {
            minimumFractionDigits: 2
          })}
        </p>
      </div>
    </div>
  )
}

export default Modal