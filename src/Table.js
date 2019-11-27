import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  tag: "table"
};

const Table = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("table", className);
  return <Tag {...attributes} className={classes} />;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
