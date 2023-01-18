import axios from "axios";

import {
  allTodosStarted,
  allTodosSuccess,
  allTodosFailure,
  allAuthorSuccess
} from "../creators/todo";

const BASE_URL = "https://test-front.framework.team";

export const allPictures = () => async (dispatch) => {
    dispatch(allTodosStarted());
  
    try {
      const { data } = await axios.get(`${BASE_URL}/paintings`);
  
      dispatch(allTodosSuccess(data));
    } catch (error) {
      dispatch(allTodosFailure(error));
    }
};
export const dataPages = ({ pages, limit }) => async (dispatch) => {
  dispatch(allTodosStarted());

  try {
    const { data } = await axios.get(`${BASE_URL}/paintings?_page=${pages}&_limit=${limit}`);

    dispatch(allTodosSuccess(data));
  } catch (error) {
    dispatch(allTodosFailure(error));
  }
};
export const allAuthor = () => async (dispatch) => {
  dispatch(allTodosStarted());

  try {
    const { data } = await axios.get(`${BASE_URL}/authors`);

    dispatch(allAuthorSuccess(data));
  } catch (error) {
    dispatch(allTodosFailure(error));
  }
};
export const allLocations = () => async (dispatch) => {
  dispatch(allTodosStarted());

  try {
    const { data } = await axios.get(`${BASE_URL}/locations`);

    dispatch(allTodosSuccess(data));
  } catch (error) {
    dispatch(allTodosFailure(error));
  }
};