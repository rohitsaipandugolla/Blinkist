import React from "react";
import Button from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes/index";

const ButtonComponent = {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <Button {...args} />
  </ThemeProvider>
);

export const PrimaryButton= Template.bind({});
PrimaryButton.args = {
  title: "View Order",
};


export default ButtonComponent;