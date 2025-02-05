import PropTypes from "prop-types";

const CategoryList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  error,
}) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClick = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <ul className="categories">
      {categories.map((category, i) => (
        <li
          key={i}
          className={`categories__item ${
            selectedCategory === category ? "categories__item__selected" : ""
          }`}
          onClick={() => handleClick(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

// Define prop types for the component
CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default CategoryList;
