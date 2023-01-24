import {
  ALL_TODO_FAILURE,
  ALL_TODO_STARTED,
  ALL_TODO_SUCCESS,
  ALL_AUTHOR_SUCCESS,
  PAGES_TODO_SUCCESS,
  ALL_LOCATION_SUCCESS,
} from "../types/todo";

export const allTodosStarted = () => ({
  type: ALL_TODO_STARTED,
});

export const allTodosSuccess = (todos) => ({
  type: ALL_TODO_SUCCESS,
  payload: {
    todos:{
      all:todos,
    },
  },
});
export const pagesTodosSuccess = (todos) => ({
  type: PAGES_TODO_SUCCESS,
  payload: {
    todos:{
      pages:todos,
    },
  },
});


export const allAuthorSuccess = (todos) => ({
  type: ALL_AUTHOR_SUCCESS,
  payload: {
    todos:{
      author:todos,
    },
  },
});
export const allLocationSuccess = (todos) => ({
  type: ALL_LOCATION_SUCCESS,
  payload: {
    todos:{
      location:todos,
    },
  },
});
export const allTodosFailure = (error) => ({
  type: ALL_TODO_FAILURE,
  payload: {
    error,
  },
});
