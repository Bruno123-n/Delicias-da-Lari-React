import ProductCard from "./ProductCard"
import "./ProductList.css"

function ProductList({ produtos, onSelecionar }) {
  return (
    <div className="products">
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          produto={produto}
          onSelecionar={onSelecionar}
        />
      ))}
    </div>
  )
}

export default ProductList