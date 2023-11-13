// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import "./switch.scss";
import { Box, Switch } from "@material-ui/core";

export default function AVSwitch({ variant, ...props }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <Switch
        className={["av-switch", `av-switch--${variant}`].join(" ")}
        {...props}
      />
    </Box>
  );
}

AVSwitch.propTypes = {
  /**
   * Button variant
   */
  variant: PropTypes.oneOf(["default", "red", "yellow"]),
  /**
   * Is checked by default?
   */
   defaultChecked: PropTypes.bool,
  /**
   * Is disabled?
   */
   disabled: PropTypes.bool,
};
