import type { Meta, StoryObj } from "@storybook/react-vite";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    rounded: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "/images/car.jpg",
    alt: "Placeholder image",
    rounded: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "/images/car.jpg",
    alt: "Disabled image",
    disabled: true,
  },
};
