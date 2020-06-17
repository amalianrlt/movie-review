import React from "react";
import { Pagination } from "antd";
import { useDispatch } from "react-redux";
import { getMoviesPagination } from "../../store/actions/homeAction";

function PaginationPage() {
  const dispatch = useDispatch();

  const changePage = (key) => {
      dispatch(getMoviesPagination(key))
    }
  
  return (
    <Pagination
      onChange={changePage}
      style={{ textAlign: "center", marginBottom: "3rem" }}
      defaultPageSize={5}
      total={20}
    />
  );
  }

export default PaginationPage;
