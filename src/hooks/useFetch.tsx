/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../redux/dataSlice";
import { setError } from "../redux/errorSlice";
import { RootState } from "../redux/store";

function useFetch(url: string) {
  const { page } = useSelector((state: RootState) => state.page);
  const { id } = useSelector((state: RootState) => state.id);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        dispatch(setError(true));
      } else {
        const data = await response.json();
        dispatch(updateData(data));
      }
    };

    fetchData();
  }, [page, id]);
}

export default useFetch;
