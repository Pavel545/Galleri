import {
  ALL_TODO_FAILURE,
  ALL_TODO_STARTED,
  ALL_TODO_SUCCESS,
  PAGES_TODO_SUCCESS,
  ALL_AUTHOR_SUCCESS,
  ALL_LOCATION_SUCCESS,
} from "../actions/types/todo";

const initialState = {
  loading: false,
  error: null,
  todos: { all: [], pages: [], author: [], location: [] },
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case ALL_TODO_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }

    case ALL_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,

        todos: {
          all: [...action.payload.todos.all],
          pages: [...state.todos.pages],
          author: [...state.todos.author],
          location: [...state.todos.location],
        },
      };

    case PAGES_TODO_SUCCESS:
      return {
        ...state,

        loading: false,
        error: null,
        todos: {
          all: [...state.todos.all],
          pages: [...action.payload.todos.pages],
          author: [...state.todos.author],
          location: [...state.todos.location],
        },
      };
      case ALL_AUTHOR_SUCCESS:
      return {
        ...state,

        loading: false,
        error: null,
        todos: {
          all: [...state.todos.all],
          pages: [...state.todos.pages],
          author: [...action.payload.todos.author],
          location: [...state.todos.location],
        },
      };
      case ALL_LOCATION_SUCCESS:
      return {
        ...state,

        loading: false,
        error: null,
        todos: {
          all: [...state.todos.all],
          pages: [...state.todos.pages],
          author: [...state.todos.author],
          location: [...action.payload.todos.location],
        },
      };

    default:
      return state;
  }
}
