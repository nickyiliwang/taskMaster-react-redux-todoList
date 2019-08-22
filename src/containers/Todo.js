import React from "react";
import { connect } from "react-redux";

const Todo = ({ text }) => {
  return <div>{text}</div>;
};

const mapStateToProps = state => {
  return {
    text: state.text
  };
};

export default connect(mapStateToProps)(Todo);
