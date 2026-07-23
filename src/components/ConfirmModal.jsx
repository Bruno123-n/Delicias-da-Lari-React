import Modal from "./Modal";
import "./ConfirmModal.css"

function ConfirmModal({
  titulo,
  mensagem,
  onConfirmar,
  onCancelar
}) {

  return (
    <Modal isOpen={true} onClose={onCancelar}>

      <h2
        className="titulo"
      >
        {titulo}
      </h2>
      <p
        className="mensagem"
      >
        {mensagem}
      </p>

      <div className="acao">

        <button
          className="Cancelar"
          onClick={onCancelar}
        >
          Cancelar
        </button>
        <button
          className="Confirmar"
          onClick={onConfirmar}
        >
          Confirmar
        </button>
      </div>
    </Modal>
    
  )
}

export default ConfirmModal