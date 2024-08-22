export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";

export const fetchCategories = () => {
  return async (dispatch) => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: data });
  };
};
