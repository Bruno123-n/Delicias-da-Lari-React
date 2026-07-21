import ProductInfo from "./ProductInfo";
import ProductRating from "./ProductRating";
import ProductActions from "./ProductActions";


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

    <ProductRating
        avaliacao={produto.avaliacao}
    />

    <ProductActions
        produto={produto}
        onVoltar={onVoltar}
        adicionarAoCarrinho={adicionarAoCarrinho}
    />

</div>

)

}

export default ProductDetails