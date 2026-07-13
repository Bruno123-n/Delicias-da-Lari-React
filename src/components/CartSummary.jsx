import formatPrice from "../utils/formatPrice"


function CartSummary({total, totalItens}){
    return(
        <>
            <p>Total: {formatPrice(total)}</p>
            <p>Total de itens: {totalItens}</p>
        </>
    )
}

export default CartSummary