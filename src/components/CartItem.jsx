import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const itemTotal = item.price * item.quantity;

  function handleIncrease() {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  }

  function handleDecrease() {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
      return;
    }

    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  }

  function handleRemove() {
    dispatch(removeItem(item.id));
  }

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)} each</p>
      </div>

      <div
        className="quantity-controls"
        aria-label={`Quantity controls for ${item.name}`}
      >
        <button
          type="button"
          onClick={handleDecrease}
          aria-label={`Decrease quantity of ${item.name}`}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          type="button"
          onClick={handleIncrease}
          aria-label={`Increase quantity of ${item.name}`}
        >
          +
        </button>
      </div>

      <div className="cart-item-actions">
        <p className="item-total">
          ${itemTotal.toFixed(2)}
        </p>

        <button
          type="button"
          className="remove-button"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;