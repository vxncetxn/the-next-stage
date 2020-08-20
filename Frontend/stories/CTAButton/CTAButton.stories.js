import CTAButton from "./";

export default {
  title: "Docs/CTAButton",
  component: CTAButton,
};

const Template = (args) => <CTAButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Donate",
};
