import { FETCH_CATEGORIES_SUCCESS } from "../actions/categoryActions";

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
