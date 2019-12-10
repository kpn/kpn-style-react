import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "nav"
};

const MegaMenuPrimary = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("mega-menu__primary", className);
  return <Tag {...attributes} className={classes} />;
};

MegaMenuPrimary.propTypes = propTypes;
MegaMenuPrimary.defaultProps = defaultProps;

export default MegaMenuPrimary;
