import formatPrice from "../utils/formatPrice";
import "./ProductDetails.css";

const estrelas = [1, 2, 3, 4, 5]

function ProductDetails({ produto, onVoltar, adicionarAoCarrinho }) {
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

            <p className="rating">
                {estrelas.map((estrela) => 
                <span key={estrela}>
                    {estrela <= produto.avaliacao ? "⭐" : "☆"}
                </span>
                )}
            </p>
            <p>
                Preço: {formatPrice(produto.preco)}
            </p>
        

            <div className="acoes">
                <button
                    className="addCarrinho"
                    onClick={() => adicionarAoCarrinho(produto)}
                >
                    Adicionar ao carrinho
                </button>
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