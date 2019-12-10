import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const propTypes = {
  tag: PropTypes.elementType,
  className: PropTypes.string
};

const defaultProps = {
  tag: "dl"
};

const FooterList = ({ className, tag: Tag, ...attributes }) => {
  const classes = classNames("footer__list", className);
  return <Tag {...attributes} className={classes} />;
};

FooterList.propTypes = propTypes;
FooterList.defaultProps = defaultProps;

export default FooterList;

