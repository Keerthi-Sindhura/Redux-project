export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProducts = (
  category = "",
  searchQuery = "",
  skip = 0,
  limit = 10
) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
      let url = category
        ? `https://dummyjson.com/products/category/${category}`
        : `https://dummyjson.com/products`;
      if (searchQuery !== "") {
        url += `/search?q=${encodeURIComponent(
          searchQuery
        )}&limit=${limit}&skip=${skip}`;
      } else {
        url += `?limit=${limit}&skip=${skip}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data.products });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, error });
    }
  };
};
