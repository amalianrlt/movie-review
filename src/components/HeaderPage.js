import React from "react";
import { Input, Layout } from 'antd';

const { Header } = Layout
function HeaderPage() {
  return (
  <Layout>
    <Header>
      <h1>MilanTV</h1>
      <Input placeholder="Search" />
      <h1>Sign In</h1>
    </Header>
  </Layout>
  )
}

export default HeaderPage;
