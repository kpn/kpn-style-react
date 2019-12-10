import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  active: PropTypes.bool
};

const defaultProps = {
  tag: "a",
  active: false
};

const MegaMenuLink = ({ className, tag: Tag, active, ...attributes }) => {
  const classes = classNames(
    "mega-menu__link",
    active ? "mega-menu__link--active" : null,
    className
  );

  return <Tag {...attributes} className={classes} />;
};

MegaMenuLink.propTypes = propTypes;
MegaMenuLink.defaultProps = defaultProps;

export default MegaMenuLink;
