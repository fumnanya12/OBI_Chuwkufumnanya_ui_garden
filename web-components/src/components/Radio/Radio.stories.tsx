import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    labels: {
      control: "object",
    },
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    onChange: {
      action: "changed",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    labels: ["Student", "Developer", "Designer"],
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    labels: ["Student", "Developer", "Designer"],
    selected: "Developer",
  },
};

export const Disabled: Story = {
  args: {
    labels: ["Student", "Developer", "Designer"],
    disabled: true,
  },
};
