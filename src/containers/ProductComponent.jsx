import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./ProductListing";

const ProductComponent = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  console.log(products);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts(selectedCategory));
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    setSkip(0);
  }, [selectedCategory]);

  const loadMoreProducts = () => {
    setSkip(skip + 10);
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button onClick={loadMoreProducts}>Load More</button>
    </div>
  );
};

export default ProductComponent;
