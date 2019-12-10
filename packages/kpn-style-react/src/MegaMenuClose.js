import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "button"
};

const MegaMenuClose = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("mega-menu__close", className);
  return <Tag {...attributes} className={classes} />;
};

MegaMenuClose.propTypes = propTypes;
MegaMenuClose.defaultProps = defaultProps;

export default MegaMenuClose;
