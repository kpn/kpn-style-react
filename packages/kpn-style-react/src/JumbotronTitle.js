import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "h1"
};

const JumbotronTitle = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("jumbotron__title", className);
  return <Tag {...attributes} className={classes} />;
};

JumbotronTitle.propTypes = propTypes;
JumbotronTitle.defaultProps = defaultProps;

export default JumbotronTitle;

