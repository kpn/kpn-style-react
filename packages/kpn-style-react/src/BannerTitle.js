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

const BannerTitle = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("banner__title", className);
  return <Tag {...attributes} className={classes} />;
};

BannerTitle.propTypes = propTypes;
BannerTitle.defaultProps = defaultProps;

export default BannerTitle;

