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

const Content = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("content", className);
  return <Tag {...attributes} className={classes} />;
};

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;

