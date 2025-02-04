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
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" }
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
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  isMultiple: true, 
  isWithSearch: true, 
};
