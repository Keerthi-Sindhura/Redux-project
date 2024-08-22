// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ProductComponent from "./ProductComponent";
// import ProductCategories from "./ProductCategories";
// import { setProducts, setCategories } from "../redux/actions/productActions";

// export const fetchProducts = async (category = "") => {
//   const dispatch = useDispatch();
//   const url = category
//     ? `https://dummyjson.com/products/category/${category}`
//     : `https://dummyjson.com/products`;
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log("products,,,,", data);
//   dispatch(setProducts(data));
// };

// export const fetchCategories = async () => {
//   const dispatch = useDispatch();
//   const response = await fetch("https://dummyjson.com/products/categories");
//   const data = await response.json();
//   console.log("categoriues,,,,", data);
//   dispatch(setCategories(data));
// };

// const ProductListing = () => {
//   useEffect(() => {
//     fetchProducts();
//     fetchCategories();
//   }, []);
//   return (
//     <div className="ui grid container">
//       <ProductCategories />
//       <ProductComponent />
//     </div>
//   );
// };

// export default ProductListing;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

const ProductList = ({ selectedCategory, searchQuery }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  // const [searchQuery, setSearchQuery] = useState("");
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    dispatch(fetchProducts(selectedCategory, searchQuery, skip));
  }, [dispatch, selectedCategory, searchQuery, skip]);

  useEffect(() => {
    setSkip(0);
  }, [selectedCategory]);

  const loadMoreProducts = () => {
    setSkip(skip + 10);
  };

  const productCard = products.map((product, index) => {
    return (
      <div className="product-card" key={index}>
        <img src={product.images[0]} width={100} height={100} loading="lazy" alt={product.title}/>
        <h4>{product.title}</h4>
        <p>Category: {product.category}</p>
      </div>
    );
  });
  return (
    <div>
      {loading && <p className="loader">Loading...</p>}
      {error && <p>{error.message}</p>}
      <div className="products">{productCard}</div>

      <button
        className="load-more"
        onClick={loadMoreProducts}
        disabled={loading}
      >
        Load More
      </button>
    </div>
  );
};

export default ProductList;
