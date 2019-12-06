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

const TopBarLink = ({
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
      ? "top-bar__link--expanded"
      : "top-bar__link--collapsed"
    : null;

  const classes = classNames(
    "top-bar__link",
    active ? "top-bar__link--active" : null,
    collapsedClass,
    className
  );
  const onClick = () => {
    setexpanded(!expanded);
  };
  return <Tag onClick={onClick} {...attributes} className={classes} />;
};

TopBarLink.propTypes = propTypes;
TopBarLink.defaultProps = defaultProps;

export default TopBarLink;
