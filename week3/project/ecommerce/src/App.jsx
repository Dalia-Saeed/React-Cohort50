import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import FavouritesPage from "./components/FavouritesPage";
import { FavouritesProvider } from "./components/FavouritesContext";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <FavouritesProvider>
      <Router>
        <div className="app">
          <nav className="navbar">
            <Link to="/">Home</Link> | <Link to="/favourites">Favourites</Link>
          </nav>
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
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </div>
      </Router>
    </FavouritesProvider>
  );
}

export default App;
