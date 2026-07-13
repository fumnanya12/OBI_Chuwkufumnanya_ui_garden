import { render } from "@testing-library/react";
import { Table, TableHeader, TableRow, TableCell } from "./Table";

describe("Table", () => {
  test("component is visible", () => {
    const { getByRole } = render(
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Obi</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );

    const table = getByRole("table");

    expect(table).toBeVisible();
  });

  test("table appears disabled", () => {
    const { getByRole } = render(
      <Table disabled>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Obi</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );

    const table = getByRole("table");

    expect(table).toHaveStyle({
      opacity: "0.5",
    });

    expect(table).toHaveStyle({
      cursor: "not-allowed",
    });
  });
});
