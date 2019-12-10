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

const MegaMenuGroup = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("mega-menu__group", className);
  return <Tag {...attributes} className={classes} />;
};

MegaMenuGroup.propTypes = propTypes;
MegaMenuGroup.defaultProps = defaultProps;

export default MegaMenuGroup;
