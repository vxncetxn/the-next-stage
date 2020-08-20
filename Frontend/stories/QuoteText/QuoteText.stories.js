import QuoteText from "./";

export default {
  title: "Docs/QuoteText",
  component: QuoteText,
};

const Template = (args) => <QuoteText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "This is the place to be",
};
