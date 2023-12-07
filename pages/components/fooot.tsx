import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";



export default function Fooot() {
  return (
    <div style={{
        marginTop:80
    }}>
      {" "}
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Namuungoo</TableCell>
            <TableCell>Team Leader</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Sondor</TableCell>
            <TableCell>Design Lead</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Enkhbilguun</TableCell>
            <TableCell>Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Bat-Erdene</TableCell>
            <TableCell>Lead Presenter</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>Tamjid</TableCell>
            <TableCell>Design</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export { Fooot };
