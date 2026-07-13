import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    options: {
      control: "object",
    },
    onChange: {
      action: "changed",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    disabled: false,
    options: ["Student", "Developer", "Designer"],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: ["Student", "Developer", "Designer"],
  },
};
