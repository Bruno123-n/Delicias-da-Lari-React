import { useState } from "react";
import formatPrice from "../utils/formatPrice";
import ProductRating from "./ProductRating";
import "./ProductDetails.css";


function ProductDetails({ produto, onVoltar, adicionarAoCarrinho }) {
    const [itemAdicionado, setItemAdicionado] = useState(false)
    return (
    <div className="product-details">

        <div className="imagem">
            <img
                src={produto.imagem}
                alt={produto.nome}
            />
        </div>

        <div className="informacoes">
            <h2>
                {produto.nome}
            </h2>

            <p className="categoria">
                Categoria: {produto.categoria}
            </p>

            <p className="descricao">
                {produto.descricao}
            </p>

            <ProductRating avaliacao={produto.avaliacao}/>
            <p>
                Preço: {formatPrice(produto.preco)}
            </p>
        

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
        </div>

    </div>
    );
}

export default ProductDetails;