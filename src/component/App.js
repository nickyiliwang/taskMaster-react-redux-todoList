import React from "react";
import Header from "./Header";
import AddTodo from "../containers/AddTodo";
import { VisibilityToggle } from "./VisibilityToggle";
import RenderList from "../containers/RenderList";
import { Auth } from "../containers/Auth";

class App extends React.Component {
  render() {
    return (
      <div className="ui equal width center aligned padded grid">
        <div className="row">
          <div className="column">
            <Header />
          </div>
          <div className="column">
            <Auth />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <AddTodo />
          </div>
        </div>
        <div className="row">
          <div className="column">
            {" "}
            <VisibilityToggle />
            <RenderList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
