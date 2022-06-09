import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DynamicTable = ({ columns, data }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 1, mb: 1 }}>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ background: "#FE414D" }}>
            {columns.map(({ path, name }) => (
              <TableCell sx={{ color: "#fff" }} key={path}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((rowData, index) => (
            <TableRow hover key={index}>
              {columns.map(({ path }) => (
                <TableCell key={path}>{rowData[path]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
