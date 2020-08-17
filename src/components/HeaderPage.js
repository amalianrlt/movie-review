import React from "react";
import { Input, Layout } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DropDown, DropDownUser } from "./DropDown";

const { Header } = Layout;
function HeaderPage(props) {
  const stateUser = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Layout>
      <Header>
        <Link to="/">
          <h1>MovieFLIX</h1>
        </Link>
        <Input placeholder="Search" />
        <div>{stateUser ? <DropDownUser /> : <DropDown />}</div>
      </Header>
    </Layout>
  );
}

export default HeaderPage;
