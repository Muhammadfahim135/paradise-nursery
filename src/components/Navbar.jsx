function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#home" className="brand" aria-label="Paradise Nursery home">
          🌿 Paradise Nursery
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart" className="cart-link">
            Cart <span className="cart-badge">{cartCount}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;