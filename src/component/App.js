import React from "react";
import Header from "./Header";
import AddTodo from "../containers/AddTodo";
import { VisibilityToggle } from "./VisibilityToggle";
import RenderList from "../containers/RenderList";

// err

class App extends React.Component {
  render() {
    return (
      <div className="ui container center aligned">
        <Header />
        <AddTodo />
        <VisibilityToggle />
        <RenderList />
      </div>
    );
  }
}

export default App;
