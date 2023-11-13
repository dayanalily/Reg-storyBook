// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import "./tab.scss";
import { Box, Tabs, Tab } from "@material-ui/core";

export default function AVTab({ options, defaultValue, ...props }) {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Tabs
        className={"av-tabs"}
        onChange={handleChange}
        value={value}
      >
        {options.map((option) => (
            <Tab value={option.value} label={option.label} disabled={option.disabled} />
        ))}
      </Tabs>
    </Box>
  );
}

AVTab.propTypes = {
  /**
    *Must be at least one object in an array with the following structure<br>
   [  {  "value": "",  "label": "", "disabled": true (optional) }  ]<br><br>
   <i>Disabled is a boolean attribute and is optional</i>
   */
  options: PropTypes.array,
  /**
   * Default value
   */
   defaultValue: PropTypes.string,
};
