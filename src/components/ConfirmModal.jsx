import "./ConfirmModal.css"

function ConfirmModal({
  titulo,
  mensagem,
  onConfirmar,
  onCancelar
}) {

  return (
    <div 
      className="modal-overlay"
      onClick={onCancelar}
    >

      <div 
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >

        <h2>{titulo}</h2>

        <p>{mensagem}</p>

        <button onClick={onCancelar}>
          Cancelar
        </button>

        <button onClick={onConfirmar}>
          Confirmar
        </button>

      </div>

    </div>
    
  )
}

export default ConfirmModal