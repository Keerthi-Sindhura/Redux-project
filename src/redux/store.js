import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
