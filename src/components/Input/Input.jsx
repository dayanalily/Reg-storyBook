// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import "./input.scss";
import { Box, TextField } from "@material-ui/core";

export default function AVInput({ label, id, placeholder, type, ...props }) {
  const handleChange = (event) => {
    // setAge(event.target.value);
  };
  return (
    <Box className={["av-input"].join(" ")}>
      <label className={label ? "inputLabel" : ""}>{label}</label>
      <TextField
        {...props}
        id={id}
        variant="outlined"
        type={type}
        size="small"
        hiddenLabel
        placeholder={placeholder}
        fullWidth
      />
    </Box>
  );
}

AVInput.propTypes = {
  /**
   * Input label (optional)
   */
  label: PropTypes.string,
  /**
   * Input placeholder (optional)
   */
  placeholder: PropTypes.string,
  /**
   * Component id (optional)
   */
   id: PropTypes.string,
  /**
   * input type variant
   */
  type: PropTypes.oneOf(["text", "number"]),
  /**
   * Is disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onchange: PropTypes.func,
};
