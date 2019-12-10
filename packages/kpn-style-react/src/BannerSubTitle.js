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

const BannerSubTitle = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("banner__sub-title", className);
  return <Tag {...attributes} className={classes} />;
};

BannerSubTitle.propTypes = propTypes;
BannerSubTitle.defaultProps = defaultProps;

export default BannerSubTitle;

