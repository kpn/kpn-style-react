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

const ContentList = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("content__list", className);
  return <Tag {...attributes} className={classes} />;
};

ContentList.propTypes = propTypes;
ContentList.defaultProps = defaultProps;

export default ContentList;

