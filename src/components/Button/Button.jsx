import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
import { Button } from "@material-ui/core";

export default function AVButton({ size, variant, label, ...props }) {
  const mode = variant !== "text" ? "contained" : "text";
  return (
    <Button
      disableElevation
      size={size}
      variant={mode}
      className={[
        "av-button",
        `av-button--${size}`,
        `av-button--${variant}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </Button>
  );
}

AVButton.propTypes = {
  /**
   * Button variant
   */
  variant: PropTypes.oneOf(["primary", "secondary", "alternate", "outline", "text"]),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Is disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
