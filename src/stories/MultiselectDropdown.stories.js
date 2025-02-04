import React from "react";
import MultiSelectDropdown from "../components/MultiSelectDropdown/MultiSelectDropdown";

export default {
  title: "Components/MultiSelectDropdown",
  component: MultiSelectDropdown,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    isMultiple: { control: "boolean" },
    isWithSearch: { control: "boolean" }, 
    optionLabels: { 
      control: "object",
      defaultValue: [
        { key: "Option1", label: "option 1" },
        { key: "Option2", label: "option 2" },
        { key: "Option3", label: "option 3" }
      ]
    },
    isOutlined: { control: "boolean" }, 
  },
};

const Template = (args) => <MultiSelectDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  isMultiple: false,  
  isWithSearch: true,
  isOutlined: false,
  optionLabels: [
    { key: "option1", label: "Option 1" },
    { key: "option2", label: "Option 2" },
    { key: "option3", label: "Option 3" }
  ]
};
