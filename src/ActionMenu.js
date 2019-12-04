import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const directions = Object.freeze({
  LEFT: "left",
  RIGHT: "right"
});

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
  direction: PropTypes.oneOf([directions.LEFT, directions.RIGHT])
};

const defaultProps = {
  tag: "div",
  active: false,
  direction: directions.LEFT
};

const ActionMenu = ({
  className,
  tag: Tag,
  active,
  direction,
  ...attributes
}) => {
  const classes = classNames(
    "action-menu",
    active ? "action-menu--active" : null,
    direction === directions.RIGHT ? "action-menu--right" : null,
    className
  );

  return <Tag {...attributes} className={classes} />;
};

ActionMenu.propTypes = propTypes;
ActionMenu.defaultProps = defaultProps;
ActionMenu.directions = directions;

export default ActionMenu;
