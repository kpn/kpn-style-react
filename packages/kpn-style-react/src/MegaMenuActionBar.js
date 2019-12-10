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

const MegaMenuActionBar = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("mega-menu__action-bar");
  return <Tag {...attributes} className={classes} />;
};

MegaMenuActionBar.propTypes = propTypes;
MegaMenuActionBar.defaultProps = defaultProps;

export default MegaMenuActionBar;
