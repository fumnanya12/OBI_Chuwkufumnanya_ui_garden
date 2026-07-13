import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, TableHeader, TableRow, TableCell, TableFooter } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Table {...args}>
      <thead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </thead>

      <tbody>
        <TableRow>
          <TableCell>Obi</TableCell>
          <TableCell>obi@email.com</TableCell>
          <TableCell>Student</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Ada</TableCell>
          <TableCell>ada@email.com</TableCell>
          <TableCell>Developer</TableCell>
        </TableRow>
      </tbody>

      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>2 users</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Table {...args}>
      <thead>
        <TableRow disabled>
          <TableHeader disabled>Name</TableHeader>
          <TableHeader disabled>Email</TableHeader>
          <TableHeader disabled>Role</TableHeader>
        </TableRow>
      </thead>

      <tbody>
        <TableRow disabled>
          <TableCell disabled>Obi</TableCell>
          <TableCell disabled>obi@email.com</TableCell>
          <TableCell disabled>Student</TableCell>
        </TableRow>
      </tbody>

      <TableFooter disabled>
        <TableRow disabled>
          <TableCell disabled>Total</TableCell>
          <TableCell disabled>1 user</TableCell>
          <TableCell disabled>Inactive</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
