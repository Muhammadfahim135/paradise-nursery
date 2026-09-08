import PlantCard from './PlantCard';

const categories = ['Indoor Plants', 'Outdoor Plants', 'Succulents', 'Flowering Plants'];

function PlantList({ plants, onAddToCart }) {
  return (
    <section className="plants-section" id="plants">
      <div className="section-heading">
        <p className="eyebrow green">Our collection</p>
        <h2>Find your perfect plant</h2>
      </div>

      {categories.map((category) => {
        const categoryPlants = plants.filter((plant) => plant.category === category);

        return (
          <div className="category-group" key={category}>
            <h3>{category}</h3>
            <div className="product-grid">
              {categoryPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default PlantList;
