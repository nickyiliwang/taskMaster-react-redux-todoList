import React from "react";
import { VisibilityFilters } from "../actions";
import FilterLink from "../containers/FilterLink";

export const VisibilityToggle = () => (
  <div>
    <div className="blue ui buttons right center align">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>

        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>

        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
    </div>
  </div>
);
