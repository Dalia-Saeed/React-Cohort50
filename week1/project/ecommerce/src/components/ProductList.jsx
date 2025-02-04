import PropTypes from "prop-types";

const ProductList = ({ products }) => {
  return (
    <ul className="products">
      {products.map((product, i) => (
        <li key={i} className="products__item">
          <div className="product">
            <img
              src={product.image}
              className="product__image"
              alt={`${product.title} image`}
            />
            <span className="product__title">{product.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

// Define prop types for the component
ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
