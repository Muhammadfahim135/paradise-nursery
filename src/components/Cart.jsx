import CartItem from './CartItem';

function Cart({
  cart,
  subtotal,
  total,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
  onContinueShopping,
  checkoutMessage,
}) {
  return (
    <section className="cart-section" id="cart">
      <div className="section-heading">
        <p className="eyebrow green">Your basket</p>
        <h2>Shopping cart</h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button type="button" className="secondary-button" onClick={onContinueShopping}>
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
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))}
          </div>

          <aside className="summary-card">
            <h3>Order summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <div className="cart-actions">
              <button type="button" className="secondary-button" onClick={onContinueShopping}>
                Continue Shopping
              </button>
              <button type="button" className="primary-button" onClick={onCheckout}>
                Checkout
              </button>
            </div>

            {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;
