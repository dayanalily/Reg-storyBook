import React from "react";
import AVButton from "./Button";

export default {
  title: "Components/Button",
  component: AVButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "alternate", "outline", "text"],
      control: { type: "radio" },
    },
    mode: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <AVButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "large",
  label: "Button",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "large",
  label: "Button",
  disabled: false,
};

export const Alternate = Template.bind({});
Alternate.args = {
  variant: "alternate",
  size: "large",
  label: "Button",
  disabled: false,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  size: "large",
  label: "Button",
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  size: "large",
  label: "Button",
  disabled: false,
};
