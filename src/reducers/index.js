import { ADD_TODO } from "../actions/constant";

const initialState = 
  {
    text: "",
    completed: false
  };

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, text: action.payload };

    default:
      return state;
  }
};

export default todos;
