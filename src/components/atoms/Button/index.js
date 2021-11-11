import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

const ButtonComponent = ({ ...props })  => (
  <Button onClick={props.onClick} className={props.className}>
    {props.title}
  </Button>
);

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default ButtonComponent;