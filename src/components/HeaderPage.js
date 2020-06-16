import React from "react";
import { Input, Layout } from "antd";
import { Link } from "react-router-dom";
import ModalLogin from "./homepage/ModalLogin";
import ModalRegister from "./homepage/ModalRegister";

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
          <ModalRegister />
          <ModalLogin />
          <h1>signout</h1>
        </div>
      </Header>
    </Layout>
  );
}

export default HeaderPage;
