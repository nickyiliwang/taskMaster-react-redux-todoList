import React from "react";
import Header from "./component/Header";
import AddTodo from "./containers/AddTodo";
import VisibilityToggle from "./component/VisibilityToggle";
import RenderList from "./containers/RenderList";

class App extends React.Component {
  render() {
    return (
      <div className="ui container middle aligned">
        <Header />
        <AddTodo />
        <VisibilityToggle />
        <RenderList />
      </div>
    );
  }
}

export default App;
