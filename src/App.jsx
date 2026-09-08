import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PlantList from './components/PlantList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import plants from './data/plants';

function App() {
  const [cart, setCart] = useState([]);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  function addToCart(plant) {
    setCheckoutMessage('');

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === plant.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === plant.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...plant,
          quantity: 1,
        },
      ];
    });
  }

  function increaseQuantity(plantId) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === plantId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(plantId) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === plantId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(plantId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== plantId)
    );
  }

  function handleCheckout() {
    if (cart.length === 0) {
      setCheckoutMessage(
        'Your cart is empty. Add a plant before checking out.'
      );
      return;
    }

    setCheckoutMessage(
      'Thank you! Your order has been placed successfully.'
    );

    setCart([]);
  }

  function handleContinueShopping() {
    setCheckoutMessage('');

    document
      .getElementById('plants')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="app-shell">
      <Navbar cartCount={cartCount} />

      <main className="page-content">

        {/* Paradise Nursery Landing Page */}
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Welcome to</p>

            <h1>Paradise Nursery</h1>

            <p className="hero-text">
              Bring a little paradise home with beautiful and
              healthy plants for every space.
            </p>

            <a
              className="primary-button"
              href="#plants"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Plants Section */}
        <PlantList
          plants={plants}
          onAddToCart={addToCart}
        />

        {/* Shopping Cart */}
        <Cart
          cart={cart}
          subtotal={subtotal}
          total={subtotal}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
          onContinueShopping={handleContinueShopping}
          checkoutMessage={checkoutMessage}
        />

      </main>

      <Footer />
    </div>
  );
}

export default App;