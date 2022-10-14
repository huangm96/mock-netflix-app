import {
  ADD_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
  GET_MY_LIST,
} from "../actionType/actionType";
import { data } from "../../data/data";
export const getMyList = () => {
  return {
    type: GET_MY_LIST,
    payload: { myList: data.mylist, recommendations: data.recommendations },
  };
};

export const addToMyList = (movie) => {
  return {
    type: ADD_TO_MY_LIST,
    payload: movie,
  };
};
export const removeFromMyList = (movie) => {
  return {
    type: REMOVE_FROM_MY_LIST,
    payload: movie,
  };
};
