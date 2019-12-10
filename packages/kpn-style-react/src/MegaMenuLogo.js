import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "a"
};

const MegaMenuLogo = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("mega-menu__logo", className);
  return <Tag {...attributes} className={classes} />;
};

MegaMenuLogo.propTypes = propTypes;
MegaMenuLogo.defaultProps = defaultProps;

export default MegaMenuLogo;
