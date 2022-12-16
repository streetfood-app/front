import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuItem } from "./menu-item.component";

export default {
  title: "Menu/Menu Item",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const View = Template.bind({});

View.args = {
  imagePath: "/assets/pizza/carbonara.jpeg",
  weight: 555,
  title: "Pizza Carbonara",
  ingredients:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, vel.",
  price: 199,
};
