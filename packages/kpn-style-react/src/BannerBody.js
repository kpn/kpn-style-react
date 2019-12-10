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

const BannerBody = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("banner__body", className);
  return <Tag {...attributes} className={classes} />;
};

BannerBody.propTypes = propTypes;
BannerBody.defaultProps = defaultProps;

export default BannerBody;

