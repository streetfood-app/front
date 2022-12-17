import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterAddress } from "./footer-address.component";

export default {
  title: "FooterInfo/FooterAddress",
  component: FooterAddress,
} as ComponentMeta<typeof FooterAddress>;

const Template: ComponentStory<typeof FooterAddress> = () => <FooterAddress />;

export const View = Template.bind({});
