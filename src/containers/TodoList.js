import React from "react";
import { connect } from "react-redux";

const TodoList = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

const mapStateToProps = state => {
  return { text: state.text };
};

export default connect(mapStateToProps)(TodoList);
