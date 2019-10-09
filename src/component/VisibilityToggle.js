import React from "react";
import { VisibilityFilters } from "../Redux/actions";
import FilterLink from "../containers/FilterLink";

const VisibilityToggle = () => (
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

export default VisibilityToggle;
