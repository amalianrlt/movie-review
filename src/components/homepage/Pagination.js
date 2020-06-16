import React, { useState } from "react";
import { Pagination } from "antd";
import { useDispatch } from "react-redux";
import { getMoviesPagination } from "../../store/actions/homeAction";

function PaginationPage() {
  const dispatch = useDispatch();
  // dispatch(getMoviesPagination);
  // const [movies, setMovies] = useState([])
  // const [currentMovies, setCurrentMovies] = useState(1)
  // const [postPerPage, setPostPerPage] = useState(5)

  // onChange = page => {
  //   console.log(page);
  //   this.setState({
  //     current: page,
  //   });
  // };

  const changePage = (key) => {
      console.log('key',key)
      // setPage(key)
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
