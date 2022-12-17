import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterBook } from "./footer-book.component";

export default {
  title: "FooterInfo/FooterBook",
  component: FooterBook,
} as ComponentMeta<typeof FooterBook>;

const Template: ComponentStory<typeof FooterBook> = (args) => (
  <FooterBook {...args} />
);

export const View = Template.bind({});
View.args = {
  href: "tel:3473628772",
  children: "347-362-8772",
};
