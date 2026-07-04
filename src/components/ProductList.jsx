import ProductCard from "./ProductCard"
import "./ProductList.css"

function ProductList({ produtos, onSelecionar, adicionarAoCarrinho }) {
  return (
    <div className="products">
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          produto={produto}
          onSelecionar={onSelecionar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      ))}
    </div>
  )
}

export default ProductList