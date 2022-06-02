/** @format */

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { RootState } from "../redux/store";
function CustomTable() {
  const { id } = useSelector((state: RootState) => state.id);
  const { page } = useSelector((state: RootState) => state.page);
  const { data } = useSelector((state: RootState) => state.data);

  useFetch(`https://reqres.in/api/products?per_page=5&page=${page}&id=${id}`);

  return (
    <TableContainer sx={{ maxWidth: 1, mt: 1 }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow sx={{ border: "2px solid black" }}>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(data.data) ? (
            data.data.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  sx={{
                    bgColor: "red",
                    border: "2px solid black",
                  }}
                >
                  <TableCell sx={{ bgcolor: `${row.color}` }}>
                    {row.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      bgcolor: `${row.color}`,
                      textAlign: "right",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{ bgcolor: `${row.color}`, textAlign: "right" }}
                  >
                    {row.year}
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell
                sx={{ bgcolor: `${data.data.color}`, textAlign: "right" }}
              >
                {data.data.id}
              </TableCell>
              <TableCell
                sx={{ bgcolor: `${data.data.color}`, textAlign: "right" }}
              >
                {data.data.name}
              </TableCell>
              <TableCell
                sx={{ bgcolor: `${data.data.color}`, textAlign: "right" }}
              >
                {data.data.year}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
