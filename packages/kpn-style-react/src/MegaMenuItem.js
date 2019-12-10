import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  trigger: PropTypes.bool
};

const defaultProps = {
  tag: "li",
  trigger: false
};

const MegaMenuItem = ({ className, tag: Tag, trigger, ...attributes }) => {
  const classes = classNames(
    "mega-menu__item",
    trigger ? "mega-menu__item--trigger" : null,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

MegaMenuItem.propTypes = propTypes;
MegaMenuItem.defaultProps = defaultProps;

export default MegaMenuItem;
