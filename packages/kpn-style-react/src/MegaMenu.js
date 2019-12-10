import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  fitLayout: PropTypes.bool
};

const defaultProps = {
  tag: "nav",
  fitLayout: true // By default true, I dont think it is used anywhere else
};

const MegaMenu = ({ className, tag: Tag, fitLayout, ...attributes }) => {
  const classes = classNames(
    "mega-menu",
    fitLayout ? "web-layout__mega-menu" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

MegaMenu.propTypes = propTypes;
MegaMenu.defaultProps = defaultProps;

export default MegaMenu;
