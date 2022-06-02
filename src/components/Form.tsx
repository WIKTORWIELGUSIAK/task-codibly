/** @format */

import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { updateId } from "../redux/idSlice";
import { RootState } from "../redux/store";
import { setError } from "../redux/errorSlice";

function Form() {
  const { data } = useSelector((state: RootState) => state.data);

  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateId(e.target.value));
    if (data.total < parseInt(e.target.value)) {
      dispatch(setError(true));
    } else {
      dispatch(setError(false));
    }
  };
  return (
    <TextField
      sx={{ width: 1 }}
      type="number"
      label="Search by id"
      onChange={handleChange}
      tabIndex={0}
      onKeyPress={(e) => {
        if (!/[0-9]/.test(e.key)) {
          e.preventDefault();
        }
      }}
    />
  );
}

export default Form;
