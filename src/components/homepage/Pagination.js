import React from 'react'
import { Pagination } from 'antd';

class PaginationPage extends React.Component {
  state = {
    current: 3,
  };

  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };

  render() {
    return <Pagination style={{textAlign:"center", marginBottom:"3rem"}} current={this.state.current} onChange={this.onChange} total={50} />;
  }
}

export default PaginationPage
