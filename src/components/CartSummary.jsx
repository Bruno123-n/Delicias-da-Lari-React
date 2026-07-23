import formatPrice from "../utils/formatPrice";
import "./CartSummary.css";

function CartSummary({ total, totalItens }) {
  return (
    <div className="summary">
      <div className="summary-item">
        <span>Total de itens:</span>
        <span className="valor-itens">{totalItens}</span>
      </div>

      <div className="summary-item total-destaque">
        <span>Total:</span>
        <span className="valor-total">{formatPrice(total)}</span>
      </div>
    </div>
  );
}

export default CartSummary;