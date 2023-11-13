import React from "react";
import AVInput from "./Input";

export default {
  title: "Components/Input",
  component: AVInput,
};

const Template = (args) => <AVInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  placeholder: "Placeholder",
  type:"text",
  disabled: false,
};
