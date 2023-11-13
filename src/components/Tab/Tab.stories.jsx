import React from "react";
import AVTab from "./Tab";

export default {
  title: "Components/Tab",
  component: AVTab,
};

const Template = (args) => <AVTab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [{ value: "one", label: "Test 1"}, { value: "two", label: "Test 2", disabled:true},  { value: "three", label: "Test 3"}],
  defaultValue: "three"
};
