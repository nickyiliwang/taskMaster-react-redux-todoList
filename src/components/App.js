import React, { Component } from "react";
import AddTodo from "../containers/AddTodo";
import Todo from "../containers/Todo";

export class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <Todo />
      </div>
    );
  }
}
