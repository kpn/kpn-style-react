import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  tag: "div"
};

const TopBarTitle = ({className, tag: Tag, ...attributes}) => {
  const classes = classNames("top-bar__title", className);
  return <Tag {...attributes} className={classes} />;
};

TopBarTitle.propTypes = propTypes;
TopBarTitle.defaultProps = defaultProps;

export default TopBarTitle;
