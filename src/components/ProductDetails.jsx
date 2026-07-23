import ProductInfo from "./ProductInfo";
import ProductRating from "./ProductRating";
import ProductActions from "./ProductActions";
import "./ProductDetails.css";


function ProductDetails({
    produto,
    onVoltar,
    adicionarAoCarrinho
}) {

return (

<div className="product-details">

    <ProductInfo 
        produto={produto}
    />

    <div className="detalhes-coluna-direita">
        <ProductRating
            avaliacao={produto.avaliacao}
        />
        <ProductActions
            produto={produto}
            onVoltar={onVoltar}
            adicionarAoCarrinho={adicionarAoCarrinho}
        />
    </div>

</div>

)

}

export default ProductDetails