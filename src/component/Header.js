import React from "react";

const Header = () => {
  return (
    <h1 className="ui center aligned header" style={{ margin: "20px" }}>
      <div className="content">
        <i className="settings icon" />
        TASK MASTER
        <div className="sub header">Write, Edit, Complete, Delete</div>
      </div>
    </h1>
  );
};

export default Header;
