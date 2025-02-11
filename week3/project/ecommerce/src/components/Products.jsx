/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";

const Products = ({ products }) => {
  // State to track favorited products
  const [favorites, setFavorites] = useState({});

  // Toggle favorite status for a product
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <h4>{product.title}</h4>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          </Link>
          {/* Add FavoriteIcon component */}
          <FavoriteIcon
            isFavorited={favorites[product.id] || false}
            toggleFavorite={() => toggleFavorite(product.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
