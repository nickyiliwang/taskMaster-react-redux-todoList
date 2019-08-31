export const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        { id: action.id, text: action.payload, completed: false }
      ];

    case "TOGGLE_ITEM":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    case "DELETE_ITEM":
      return [...state.filter(({ id }) => id !== action.id)];

    default:
      return state;
  }
};
