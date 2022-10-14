import {
  ADD_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
  GET_MY_LIST,
} from "../actionType/actionType";

const initialList = {
  myList: [],
  recommendations: [],
};

const moviesListReducer = (state = initialList, action) => {
  switch (action.type) {
    // get my data
    case GET_MY_LIST:
      return {
        ...state,
        myList: action.payload.myList,
        recommendations: action.payload.recommendations,
      };
    // remove from recommendations list, add to myList
    case ADD_TO_MY_LIST:
      return {
        ...state,
        myList: [...state.myList, action.payload],
        recommendations: state.recommendations.filter((movie) => {
          return movie.id !== action.payload.id;
        }),
      };
    // remove from my list
    case REMOVE_FROM_MY_LIST:
      return {
        ...state,
        myList: state.myList.filter((movie) => {
          return movie.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};

export default moviesListReducer;
