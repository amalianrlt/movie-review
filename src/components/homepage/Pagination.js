import React from 'react';
import { Pagination } from 'antd';

function PaginationPage() {
  // state = {
  //   current: 1,
  // };

  // onChange = page => {
  //   console.log(page);
  //   this.setState({
  //     current: page,
  //   });
  // };

    return <Pagination style={{textAlign:"center", marginBottom:"3rem"}} total={50} />;

}

export default PaginationPage
