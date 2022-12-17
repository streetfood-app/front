import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterOpening } from "./footer-opening.component";

export default {
  title: "FooterInfo/FooterOpening",
  component: FooterOpening,
} as ComponentMeta<typeof FooterOpening>;

const Template: ComponentStory<typeof FooterOpening> = () => <FooterOpening />;

export const View = Template.bind({});
