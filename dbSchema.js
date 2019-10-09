state = {
  todos: [
    {
      id: 0,
      text: action.payload,
      completed: false,
      updating: false
    },
    {
      id: 1,
      text: action.payload,
      completed: false,
      updating: false
    },
    {
      id: 2,
      text: action.payload,
      completed: false,
      updating: false
    }
  ],

  visibilityFilter: { SHOW_ALL }
};
