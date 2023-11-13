import React from "react";
import AVSelect from "./Select";

export default {
  title: "Components/Select",
  component: AVSelect,
};

const Template = (args) => <AVSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  placeholder: "Select an option",
  disabled: false,
  options: [{ value: "Test", label: "Test"}]
};