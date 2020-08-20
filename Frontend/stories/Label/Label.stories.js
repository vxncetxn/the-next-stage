import Label from "./";

export default {
  title: "Docs/Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const First = Template.bind({});
First.args = {
  step: 1,
  children: "What is your nickname?",
};

export const Second = Template.bind({});
Second.args = {
  step: 2,
  children: "How are you today?",
};
