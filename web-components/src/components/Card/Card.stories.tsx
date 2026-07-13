import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    imageUrl: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    onClick: { action: "card clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Assignment Card",
    description: "A card component.",
    imageUrl: "/images/car.jpg",
    backgroundColor: "#ffffff",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Card",
    description: "This card is visually disabled.",
    imageUrl: "/images/car.jpg",
    backgroundColor: "#ffffff",
    disabled: true,
  },
};
