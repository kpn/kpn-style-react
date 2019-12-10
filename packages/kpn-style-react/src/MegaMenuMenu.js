import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "ul"
};

const MegaMenuMenu = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("mega-menu__menu", className);
  return <Tag {...attributes} className={classes} />;
};

MegaMenuMenu.propTypes = propTypes;
MegaMenuMenu.defaultProps = defaultProps;

export default MegaMenuMenu;
