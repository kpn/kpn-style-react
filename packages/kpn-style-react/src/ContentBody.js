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

const ContentBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("content__body", className);
  return <Tag {...attributes} className={classes} />;
};

ContentBody.propTypes = propTypes;
ContentBody.defaultProps = defaultProps;

export default ContentBody;

