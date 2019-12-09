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

const ContentHeader = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("content__header", className);
  return <Tag {...attributes} className={classes} />;
};

ContentHeader.propTypes = propTypes;
ContentHeader.defaultProps = defaultProps;

export default ContentHeader;

