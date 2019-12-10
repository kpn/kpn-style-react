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

const MegaMenuSecondary = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("mega-menu__secondary", className);
  return <Tag {...attributes} className={classes} />;
};

MegaMenuSecondary.propTypes = propTypes;
MegaMenuSecondary.defaultProps = defaultProps;

export default MegaMenuSecondary;
