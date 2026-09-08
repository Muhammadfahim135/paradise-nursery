function PlantCard({ plant, onAddToCart }) {
  return (
    <article className="product-card">
      <img className="plant-image" src={plant.image} alt={plant.name} />

      <div className="card-content">
        <div className="card-header">
          <h3>{plant.name}</h3>
          <span className="price-tag">${plant.price.toFixed(2)}</span>
        </div>

        <p>{plant.description}</p>

        <button type="button" className="primary-button" onClick={() => onAddToCart(plant)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default PlantCard;