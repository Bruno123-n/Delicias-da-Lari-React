import formatPrice from "../utils/formatPrice";

function ProductInfo({ produto }) {
    return (
        <>
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

                <p>
                    Preço: {formatPrice(produto.preco)}
                </p>

            </div>
        </>
    )
}

export default ProductInfo;