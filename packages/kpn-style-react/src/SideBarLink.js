import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string,
  active: PropTypes.bool,
  collapsed: PropTypes.bool,
  expanded: PropTypes.bool,
  setexpanded: PropTypes.func
};

const defaultProps = {
  tag: "a",
  active: false,
  collapsed: false,
  expanded: false,
  setexpanded: () => {}
};

const SideBarLink = ({
  className,
  tag: Tag,
  active,
  collapsed,
  expanded,
  setexpanded,
  ...attributes
}) => {
  const collapsedClass = collapsed
    ? expanded
      ? "side-bar__link--active side-bar__link--expanded"
      : "side-bar__link--collapsed"
    : null;

  const classes = classNames(
    "side-bar__link",
    active ? "side-bar__link--active" : null,
    collapsedClass,
    className
  );
  const onClick = () => {
    setexpanded(!expanded);
  };
  return <Tag onClick={onClick} {...attributes} className={classes} />;
};

SideBarLink.propTypes = propTypes;
SideBarLink.defaultProps = defaultProps;

export default SideBarLink;
