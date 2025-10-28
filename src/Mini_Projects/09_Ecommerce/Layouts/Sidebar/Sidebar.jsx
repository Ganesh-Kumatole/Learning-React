import Input from '../../Components/Input';
import './Sidebar.css';

const categories = ['Sneakers', 'Loafers', 'Flats', 'Heels'];
const brands = ['Nike', 'Adidas', 'Puma', 'Vans'];
const ratings = ['⭐⭐⭐ & Up', '⭐⭐⭐⭐ & Up'];
const colors = ['All', 'Red', 'Green', 'White', 'Brown', 'Black', 'Blue'];

const Sidebar = (props) => {
  const { radioFilter, setRadioFilter } = props;

  const handleReset = () => {
    setRadioFilter({
      category: null,
      brand: null,
      rating: null,
      color: 'all',
    });

    // Reset all radio buttons
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach((input) => (input.checked = false));
  };

  return (
    <section className="sidebar-container">
      <h3 className="filter-heading">Filter</h3>

      <div className="filter-section">
        <h4 className="filter-type">Categories</h4>
        {categories.map((category) => (
          <Input
            key={category}
            id={category.toLowerCase()}
            labelTxt={category}
            name="category"
            setRadioFilter={setRadioFilter}
            radioFilter={radioFilter}
          />
        ))}
      </div>
      <div className="filter-section">
        <h4 className="filter-type">Brands</h4>
        {brands.map((brand) => (
          <Input
            key={brand}
            id={brand.toLowerCase()}
            labelTxt={brand}
            name="brand"
            setRadioFilter={setRadioFilter}
            radioFilter={radioFilter}
          />
        ))}
      </div>
      <div className="filter-section">
        <h4 className="filter-type">Ratings</h4>
        {ratings.map((rating) => (
          <Input
            key={rating}
            id={rating.replace(/\s/g, '').toLowerCase()}
            labelTxt={rating}
            name="rating"
            setRadioFilter={setRadioFilter}
            radioFilter={radioFilter}
          />
        ))}
      </div>
      <div className="filter-section">
        <h4 className="filter-type">Colors</h4>
        {colors.map((color) => (
          <Input
            key={color}
            id={color.toLowerCase()}
            labelTxt={color}
            name="color"
            setRadioFilter={setRadioFilter}
            radioFilter={radioFilter}
          />
        ))}
      </div>
      <button className="reset-filter" onClick={handleReset}>
        Reset
      </button>
    </section>
  );
};

export default Sidebar;
