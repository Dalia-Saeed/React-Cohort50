/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Categories = ({ selectedCategory, onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(["All", ...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="categories">
      {loading && <p>Loading categories...</p>}
      {error && <p className="error">{error}</p>}
      {!loading &&
        !error &&
        categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
    </div>
  );
};

export default Categories;
