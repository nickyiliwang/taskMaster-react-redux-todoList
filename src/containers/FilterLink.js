import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import React from "react";

const Link = ({ active, children, onClick }) => (
  // children refers to the text inside the Component
  <button className="ui button" onClick={onClick} disabled={active}>
    {children}
  </button>
);

// ownProps.filter is the prop the component revives from the parent, which is VisibilityToggle

const mapStateToProps = (state, ownProps) => {
  return {
    // this will return true false check for button disable
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    // onclick dispatch the act to get the filter
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
