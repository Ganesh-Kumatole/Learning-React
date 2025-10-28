import {
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from 'react-icons/fa';
import '../Layouts/Products/Products.css';

const Card = ({ title, img, newPrice, prevPrice, rating, reviews, brand }) => {
  const ratingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />);
    }

    return stars;
  };

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={img} alt={title} className="card-img" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-feedback">
          <div className="card-rating">
            <span className="rating-count">{rating}</span>
            <span className="rating-stars">{ratingStars(rating)}</span>
          </div>
          <div className="card-reviews">({reviews} reviews)</div>
        </div>
        <div className="card-brand">{brand}</div>
        <div className="card-price">
          <span className="new-price">${newPrice}</span>
          <span className="old-price">${prevPrice}</span>
        </div>
        <button className="add-to-cart-btn">
          <FaShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Card;