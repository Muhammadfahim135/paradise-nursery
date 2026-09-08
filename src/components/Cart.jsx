import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const cart = useSelector((state) => state.cart.items);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleContinueShopping() {
    document
      .getElementById('plants')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  function handleCheckout() {
    if (cart.length === 0) {
      return;
    }

    alert('Thank you! Your order has been placed successfully.');
  }

  return (
    <section className="cart-section" id="cart">
      <div className="section-heading">
        <p className="eyebrow green">Your basket</p>
        <h2>Shopping Cart</h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>

          <button
            type="button"
            className="secondary-button"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <aside className="summary-card">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>

            <div className="summary-row total-row">
              <span>Total</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>

            <div className="cart-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>

              <button
                type="button"
                className="primary-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;