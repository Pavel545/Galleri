import {
  ALL_TODO_FAILURE,
  ALL_TODO_STARTED,
  ALL_TODO_SUCCESS,
  ALL_AUTHOR_STARTED,
} from "../actions/types/todo";

const initialState = {
  loading: false,
  error: null,
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_TODO_FAILURE: {
      
      return {
        ...state,
        loading: true,
      };
    }

    case ALL_TODO_STARTED: {
      state=null
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...action.payload.todos],
      };
    }

    case ALL_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      case ALL_AUTHOR_STARTED: {
        return {
          ...state,
          loading: false,
          error: null,
          todos: [...action.payload.todos],
        };
      }

      default:
        return state;
  }
}
