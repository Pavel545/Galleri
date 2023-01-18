import {
  ALL_TODO_FAILURE,
  ALL_TODO_STARTED,
  ALL_TODO_SUCCESS,
  ALL_AUTHOR_STARTED,
} from "../types/todo";

export const allTodosStarted = () => ({
  type: ALL_TODO_FAILURE,
});

export const allTodosSuccess = (todos) => ({
  type: ALL_TODO_STARTED,
  payload: {
    todos,
  },
});

export const allTodosFailure = (error) => ({
  type: ALL_TODO_SUCCESS,
  payload: {
    error,
  },
});
export const allAuthorSuccess = (todos) => ({
  type: ALL_AUTHOR_STARTED,
  payload: {
    todos,
  },
});
