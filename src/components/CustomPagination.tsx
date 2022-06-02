/** @format */

import { ChangeEvent } from "react";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setPage } from "../redux/pageSlice";

function CustomPagination() {
  const { data } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  return (
    <Pagination
      count={data.total_pages}
      onChange={handleChange}
      sx={{ display: "flex", justifyContent: "center", mt: 1 }}
    />
  );
}

export default CustomPagination;
