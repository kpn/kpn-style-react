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

const MegaMenuSubMenu = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("mega-menu__sub-menu", className);
  return <Tag {...attributes} className={classes} />;
};

MegaMenuSubMenu.propTypes = propTypes;
MegaMenuSubMenu.defaultProps = defaultProps;

export default MegaMenuSubMenu;
