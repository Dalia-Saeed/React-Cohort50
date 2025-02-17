/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const endPoint =
          selectedCategory === "All"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${selectedCategory}`;

        const response = await fetch(endPoint);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="products">
      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}
      {!loading &&
        !error &&
        products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <h4>{product.title}</h4>
              <img src={product.image} alt={product.title} className="product-image" />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Products;
