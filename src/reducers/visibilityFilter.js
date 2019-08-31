import { VisibilityFilters } from "../actions/";

export const visibilityFilter = (
  state = VisibilityFilters.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case "SET_VISIBLE_FILTER":
      return action.payload;

    default:
      return state;
  }
};
