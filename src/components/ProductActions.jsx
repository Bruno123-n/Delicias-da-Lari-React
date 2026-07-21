import {useState} from "react"

function ProductActions({
    produto,
    onVoltar,
    adicionarAoCarrinho
}) {

    const [itemAdicionado, setItemAdicionado] = useState(false)

    return (
        <div className="acoes">
                {itemAdicionado ?
                (<button
                    className="addCarrinho"
                >
                   ✔ Produto adicionado
                </button>) :
                
                (<button
                    className="addCarrinho"
                    onClick={() => {
                        adicionarAoCarrinho(produto)
                        setItemAdicionado(true)
                        setTimeout(() => {
                            setItemAdicionado(false)
                        }, 2000);
                    }}
                >
                    Adicionar ao carrinho
                </button>
            )}
                <button
                    className="voltar"
                    onClick={onVoltar}
                >   
                    <span className="seta">&larr;</span> Voltar
                </button>
            </div>
    )
}

export default ProductActions;
