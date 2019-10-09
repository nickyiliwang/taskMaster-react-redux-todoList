import { combineReducers } from "redux";
import { VisibilityFilters } from "../actions";

// data state
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: action.id,
          text: action.payload,
          completed: false,
          updating: false
        }
      ];

    case "TOGGLE_ITEM":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "DELETE_ITEM":
      return [...state.filter(({ id }) => id !== action.id)];

    case "EDIT_ITEM":
      return [...state, { updating: true }];

    case "UPDATE_ITEM":
      return [...state, { text: action.payload }];

    default:
      return state;
  }
};

// UI state
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBLE_FILTER":
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  todos,
  visibilityFilter
});
