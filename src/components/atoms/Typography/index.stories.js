import React from "react";
import TypographyComponent from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes/index";


const TypographyComponentStory = {
  title: "Typography",
  component: TypographyComponent,
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <TypographyComponent {...args} />
  </ThemeProvider>
);

export const alphaValue= Template.bind({});
alphaValue.args = {
  variant:'alphaValue',
  children:'Header1',
};

export const alphaHeader1= Template.bind({});
alphaHeader1.args = {
  variant:'alphaHeader1',
  children:'Header2',
};

export const alphaHeader2= Template.bind({});
alphaHeader2.args = {
  variant:'alphaHeader2',
  children:'Header3',
};

export default TypographyComponentStory;