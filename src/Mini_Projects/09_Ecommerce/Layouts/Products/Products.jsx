import products from '../../Database/ProductsData.js';
import Card from '../../Components/Card.jsx';
import './Products.css';

const Products = ({ searchFilter = '', radioFilter }) => {
  const filteredProducts = products.filter((product) => {
    // Search filter
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchFilter.toLowerCase());

    // Category filter
    const matchesCategory =
      !radioFilter.category ||
      product.category.toLowerCase() === radioFilter.category.toLowerCase();

    // Brand filter
    const matchesBrand =
      !radioFilter.brand || product.brand === radioFilter.brand;

    // Color filter
    const matchesColor =
      !radioFilter.color ||
      radioFilter.color === 'all' ||
      product.color.toLowerCase() === radioFilter.color.toLowerCase();

    // Rating filter
    const matchesRating =
      !radioFilter.rating ||
      (radioFilter.rating === '⭐⭐⭐⭐ & Up' && product.rating >= 4) ||
      (radioFilter.rating === '⭐⭐⭐ & Up' && product.rating >= 3);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesColor &&
      matchesRating
    );
  });

  return (
    <section className="products-container">
      <h3 className="products-heading">Footwears... </h3>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
