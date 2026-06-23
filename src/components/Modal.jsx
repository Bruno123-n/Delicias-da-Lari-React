import "./Modal.css"

function Modal({ produto, onFechar }) {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)"
    }}>
      <div style={{
        backgroundColor: "white",
        width: "300px",
        margin: "100px auto",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center"
      }}>
        <button onClick={() => onFechar(null)}>
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