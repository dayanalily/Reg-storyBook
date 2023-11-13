// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import "./select.scss";
import { ReactComponent as DropdownIcon } from "../../assets/img/dropdown-icon.svg";
import { Box, FormControl, MenuItem, Select } from "@material-ui/core";

export default function AVSelect({
  label,
  placeholder,
  id,
  options,
  ...props
}) {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    console.log("event", event);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth className={["av-select"].join(" ")} size="small">
        <label className={label ? "inputLabel" : ""}>{label}</label>
        <Select
          variant="outlined"
          labelId="demo-simple-select-label"
          id={id}
          {...props}
          onChange={handleChange}
          displayEmpty
          IconComponent={DropdownIcon}
          MenuProps={{
            classes: { paper: "av-dropdown" },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
        >
          <MenuItem disabled>{placeholder}</MenuItem>
          {options.map((option) => (
            <MenuItem value={option.value}>{option.label} </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

AVSelect.propTypes = {
  /**
   * Select id
   */
  id: PropTypes.string,
  /**
   * Select label (optional)
   */
  label: PropTypes.string,
  /**
   * Select placeholder (optional)
   */
  placeholder: PropTypes.string,
  /**
   * Is disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onchange: PropTypes.func,
  /**
   *Must be at least one object in an array with the following structure<br>
   [  {  "value": "",  "label": ""  }  ]
   */
  options: PropTypes.array,
};
