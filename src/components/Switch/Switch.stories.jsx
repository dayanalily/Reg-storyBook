import React from "react";
import AVSwitch from "./Switch";

export default {
  title: "Components/Switch",
  component: AVSwitch,
};

const Template = (args) => <AVSwitch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "default",
  defaultChecked: true,
  disabled: false,
};

export const Red = Template.bind({});
Red.args = {
  variant: "red",
  defaultChecked: true,
  disabled: false,
};

export const Yellow = Template.bind({});
Yellow.args = {
  variant: "yellow",
  defaultChecked: true,
  disabled: false,
};
