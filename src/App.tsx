/** @format */

import Form from "./components/Form";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Box from "@mui/material/Box";
import CustomTable from "./components/CustomTable";
import CustomPagination from "./components/CustomPagination";

function App() {
  const { error } = useSelector((state: RootState) => state.error);
  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
      }}
    >
      <Form />
      {error ? <div>"Could not find data with that id"</div> : <CustomTable />}
      <CustomPagination />
    </Box>
  );
}

export default App;
