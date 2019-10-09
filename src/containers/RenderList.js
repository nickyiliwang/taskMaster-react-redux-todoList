import React from "react";
import { connect } from "react-redux";
import {
  toggleItem,
  VisibilityFilters,
  deleteItem,
  editItem
} from "../Redux/actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const handleOnclick = (todoId) => {
todos.

  // document.getElementById("task-input").value = e.target.value;
  // editItem(this.props.todo.id);
};

const RenderList = ({ todos, toggleItem, deleteItem, editItem }) => (
  <div className="ui massive middle aligned divided list">
    {todos.map(todo => {
      return (
        <div className="item" key={todo.id}>
          <div className="right floated content">
            <div
              className="ui button primary"
              id="editBtn"
              onClick={handleOnclick(todo.id)}
            >
              <i className="pencil icon" />
              Edit
            </div>
            <div
              className="ui button negative"
              id="deleteBtn"
              onClick={() => deleteItem(todo.id)}
            >
              <i className="eraser icon" />
              Delete
            </div>
          </div>
          <div
            className="content"
            key={todo.id}
            onClick={() => toggleItem(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              padding: "10px",
              cursor: "pointer"
            }}
          >
            {todo.text}
          </div>
        </div>
      );
    })}
  </div>
);

const mapStateToProps = state => ({
  // state.todos gets the array from combineReducer
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleItem: id => dispatch(toggleItem(id)),
  deleteItem: id => dispatch(deleteItem(id)),
  editItem: id => dispatch(editItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderList);
