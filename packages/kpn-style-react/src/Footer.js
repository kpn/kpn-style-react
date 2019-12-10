import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "footer"
};

const Footer = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("footer", className);
  return <Tag {...attributes} className={classes} />;
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;

