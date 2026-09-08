function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)} each</p>
      </div>

      <div className="quantity-controls" aria-label={`Quantity controls for ${item.name}`}>
        <button type="button" onClick={() => onDecrease(item.id)} aria-label={`Decrease quantity of ${item.name}`}>
          -
        </button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => onIncrease(item.id)} aria-label={`Increase quantity of ${item.name}`}>
          +
        </button>
      </div>

      <div className="cart-item-actions">
        <p className="item-total">${itemTotal}</p>
        <button type="button" className="remove-button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
