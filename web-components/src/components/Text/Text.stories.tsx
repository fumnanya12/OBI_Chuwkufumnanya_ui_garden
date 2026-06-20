import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
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
}
}

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: "Testing text",
  },
};

export const CrossedOut: Story = {
  args: {
    text: "Testing text",
    crossedOut: true,
  },
};

