import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    imageUrl: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    title: "Welcome to My Site",
    subtitle: "Where we learn how to use components and storybook.",
    imageUrl: "/images/car.jpg",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Hero",
    subtitle: "This hero image is disabled.",
    imageUrl: "/images/car.jpg",
    disabled: true,
  },
};
