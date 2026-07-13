import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: {
      control: "text",
    },
    color: {
      control: "color",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    crossedOut: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Username",
  },
};

export const CrossedOut: Story = {
  args: {
    text: "Username",
    crossedOut: true,
  },
};
