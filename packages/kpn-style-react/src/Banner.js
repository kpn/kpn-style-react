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

const Banner = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("banner", className);
  return <Tag {...attributes} className={classes} />;
};

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;

