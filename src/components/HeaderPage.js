import React from "react";
import { Input, Layout } from "antd";
import { Link } from "react-router-dom";
import ModalPage from './homepage/ModalPage'
import ModalLogin from "./homepage/ModalLogin";

const { Header } = Layout;
function HeaderPage() {
  return (
    <Layout>
      <Header>
        <Link to="/">
          <h1>MilanTV</h1>
        </Link>
        <Input placeholder="Search" />
        <div className="modal-view">
          <Link to="overview">
          {/* <h1>Sign In</h1> */}
          </Link>
          <ModalLogin/>
          <ModalPage/>
        </div>
      </Header>
    </Layout>
  );
}

export default HeaderPage;
