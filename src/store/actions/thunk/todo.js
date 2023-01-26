import axios from "axios";

import {
  allTodosStarted,
  allTodosSuccess,
  allTodosFailure,
  pagesTodosSuccess,
  allAuthorSuccess,
  allLocationSuccess,
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
export const dataPages =
  ({ pages, limit }) =>
  async (dispatch) => {
    dispatch(allTodosStarted());

    try {
      const { data } = await axios.get(
        `${BASE_URL}/paintings?_page=${pages}&_limit=${limit}`
      );

      dispatch(pagesTodosSuccess(data));
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

    dispatch(allLocationSuccess(data));
  } catch (error) {
    dispatch(allTodosFailure(error));
  }
};
export const dataFilter =
  ({ filter }) =>
  async (dispatch) => {
    dispatch(allTodosStarted());

    try {
      const { data } = await axios.get(`${BASE_URL}/paintings?q=${filter}`);

      dispatch(pagesTodosSuccess(data));
      dispatch(allTodosSuccess(data));
    } catch (error) {
      dispatch(allTodosFailure(error));
    }
  };
export const filterAuthor =
  ({ filter }) =>
  async (dispatch) => {
    dispatch(allTodosStarted());

    try {
      const { data } = await axios.get(
        `${BASE_URL}/paintings?authorId=${filter}`
      );

      dispatch(pagesTodosSuccess(data));
      dispatch(allTodosSuccess(data));
    } catch (error) {
      dispatch(allTodosFailure(error));
    }
  };
export const filterLocations =
  ({ gte, lte }) =>
  async (dispatch) => {
    dispatch(allTodosStarted());

    try {
      const { data } = await axios.get(
        `${BASE_URL}/paintings?_gte=${gte}&_lte=${lte}`
      );

      dispatch(pagesTodosSuccess(data));
      dispatch(allTodosSuccess(data));
    } catch (error) {
      dispatch(allTodosFailure(error));
    }
  };
export const filterCreated =
  ({ filter }) =>
  async (dispatch) => {
    dispatch(allTodosStarted());

    try {
      const { data } = await axios.get(
        `${BASE_URL}/paintings?locationId=${filter}`
      );

      dispatch(pagesTodosSuccess(data));
      dispatch(allTodosSuccess(data));
    } catch (error) {
      dispatch(allTodosFailure(error));
    }
  };
