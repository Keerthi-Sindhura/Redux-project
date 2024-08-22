import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CategorySelector from "./containers/CategorySelector";
import ProductList from "./containers/ProductListing";
import SearchBar from "./containers/SearchBar";

export const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Provider store={store}>
      <div>
        <h1 className="title">Product Store</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="container">
          <div className="left-panel">
            <CategorySelector onSelectCategory={handleCategorySelect} />
          </div>
          <div className="vertical-divider"></div>
          <div className="right-panel">
            <ProductList
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </div>
    </Provider>
  );
};
