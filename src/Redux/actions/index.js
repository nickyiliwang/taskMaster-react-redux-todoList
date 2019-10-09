export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

let nextToDoId = 0;
export const addItem = text => ({
  type: "ADD_ITEM",
  id: nextToDoId++,
  payload: text
});

export const toggleItem = id => ({ type: "TOGGLE_ITEM", id });

export const deleteItem = id => ({
  type: "DELETE_ITEM",
  id
});

export const editItem = id => ({
  type: "EDIT_ITEM",
  id
});

export const updateItem = id => ({
  type: "UPDATE_ITEM",
  id
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBLE_FILTER",
  payload: filter
});
