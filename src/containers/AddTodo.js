import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addItem(input.value));
          input.value = "";
        }}
        className="ui inverted segment"
      >
        <div className="ui inverted fluid action input">
          <input
            id="task-input"
            type="text"
            placeholder="Enter Task ..."
            ref={node => {
              input = node;
            }}
          />
          <button type="submit" className="ui button primary">
            ADD
          </button>
          <button
            type="reset"
            className="ui button negative"
          >
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
