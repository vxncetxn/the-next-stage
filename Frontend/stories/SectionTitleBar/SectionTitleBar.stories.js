import SectionTitleBar from "./";

export default {
  title: "Docs/SectionTitleBar",
  component: SectionTitleBar,
  argTypes: {
    level: {
      control: {
        type: "inline-radio",
        options: [1, 2],
      },
    },
    position: {
      control: {
        type: "inline-radio",
        options: ["left", "right"],
      },
    },
  },
};

const Template = (args) => (
  <section
    aria-labelledby={args.id}
    style={{ display: "flex", minHeight: "150vh" }}
  >
    {args.position === "right" ? <div style={{ width: "100%" }}></div> : null}
    <SectionTitleBar {...args} />
    {args.position === "left" ? <div style={{ width: "100%" }}></div> : null}
  </section>
);

export const LeftBar = Template.bind({});
LeftBar.args = {
  id: "theatre-title",
  level: 2,
  position: "left",
  children: "theatre",
};

export const RightBar = Template.bind({});
RightBar.args = {
  id: "faqs-title",
  level: 1,
  position: "right",
  children: "faqs",
};
