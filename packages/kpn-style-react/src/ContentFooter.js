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

const ContentFooter = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("content__footer", className);
  return <Tag {...attributes} className={classes} />;
};

ContentFooter.propTypes = propTypes;
ContentFooter.defaultProps = defaultProps;

export default ContentFooter;

