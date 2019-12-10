import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "div"
};

const JumbotronBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("jumbotron__body", className);
  return <Tag {...attributes} className={classes} />;
};

JumbotronBody.propTypes = propTypes;
JumbotronBody.defaultProps = defaultProps;

export default JumbotronBody;

