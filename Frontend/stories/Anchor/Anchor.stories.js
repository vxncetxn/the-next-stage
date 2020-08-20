import Anchor from "./";

export default {
  title: "Docs/Anchor",
  component: Anchor,
};

const Template = (args) => <Anchor {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "https://www.esplanade.com/",
  children: "Esplanade — Theatres on the Bay",
};
