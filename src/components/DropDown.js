/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import {ModalRegister} from "./homepage/ModalRegister";
import {ModalLogin} from "./homepage/ModalLogin";
import { signOut, getUser } from "../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export const DropDown = (props) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <ModalLogin/>
      </Menu.Item>
      <Menu.Item key="1">
        <ModalRegister/>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Welcome <DownOutlined />
      </a>
  </Dropdown>
  );
}

export const DropDownUser = (prop) => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.auth.dataUser)
  
  useEffect(() =>{
    dispatch(getUser())

  }, [dispatch])

  const handleSignOut = () => {
    dispatch(signOut())
    window.location.reload()
}

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <p>profile</p>
      </Menu.Item>
      <Menu.Item key="1">
        <Button onClick={handleSignOut}>Sign Out</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Welcome, {dataUser.username} <DownOutlined />
      </a>
  </Dropdown>
  );

}
