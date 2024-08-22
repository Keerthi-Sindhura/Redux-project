import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/actions/categoryActions";

const CategorySelector = ({ onSelectCategory }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategorySelect = (category) => {
    onSelectCategory(category.slug);
  };

  const list = categories.map((category, index) => {
    return (
      <div
        className="category-card"
        key={`category.slud-${index}`}
        onClick={() => handleCategorySelect(category)}
      >
        <label>{category.name}</label>
      </div>
    );
  });
  return (
    <div>
      <div
        className="category-card"
        key="all"
        value=""
        onClick={() => handleCategorySelect("")}
      >
        All Categories
      </div>
      {list}
    </div>
  );
};

export default CategorySelector;
