import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
  collapsed: PropTypes.bool,
  expanded: PropTypes.bool,
  setExpanded: PropTypes.func
};

const defaultProps = {
  tag: "a",
  active: false,
  collapsed: false,
  expanded: false,
  setExpanded: () => {}
};

const SideBarLink = ({
  className,
  tag: Tag,
  active,
  collapsed,
  expanded,
  setExpanded,
  ...attributes
}) => {
  const collapsedClass = collapsed
    ? expanded
      ? "side-bar__link--active side-bar__link--expanded"
      : "side-bar__link--collapsed"
    : null;
  console.log(expanded)
  const classes = classNames(
    "side-bar__link",
    active ? "side-bar__link--active" : null,
    collapsedClass,
    className
  );
  const onClick = () => {
    setExpanded(!expanded)
  }
  return <Tag onClick={onClick} {...attributes} className={classes} />;
};

SideBarLink.propTypes = propTypes;
SideBarLink.defaultProps = defaultProps;

export default SideBarLink;
