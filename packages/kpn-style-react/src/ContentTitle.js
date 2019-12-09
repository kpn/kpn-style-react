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

const ContentTitle = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("content__title", className);
  return <Tag {...attributes} className={classes} />;
};

ContentTitle.propTypes = propTypes;
ContentTitle.defaultProps = defaultProps;

export default ContentTitle;

