import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <Router>
      <div className="app">
        <h1>Products</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Categories 
                  selectedCategory={selectedCategory} 
                  onCategorySelect={setSelectedCategory} 
                />
                <Products selectedCategory={selectedCategory} />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
