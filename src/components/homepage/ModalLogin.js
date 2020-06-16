import { Modal, Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from '../../store/actions/auth'
import { Link } from "react-router-dom";
import ModalRegister from "./ModalRegister";
import { useForm } from "react-hook-form";

const ModalLogin = () => {
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm()
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [input] = useState({
    email: "",
    password: "",
  });

  const showingModal = () => {
    setVisible(!visible)
  }

  const onSubmit = data =>{
    console.log(data)
    dispatch(login(data))
  }

  const handleOk = () =>{
    setLoading(!loading)
    setTimeout(()=> {
      setVisible(visible)
      setLoading(loading)
    }, 3000)
  }

  const handleCancel = () =>{
    setVisible(false)
  }

  return (
    <div>
      <Button type="primary" onClick={showingModal}>
        Login
      </Button>
      <Modal
        visible={visible}
        title="Login"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
          <form onSubmit={handleSubmit(onSubmit)}>
          <p>Email</p>
          <input type="text" placeholder="Email" name="email" ref={register}/>
          <p>Password</p>
          <input type="text" placeholder="Password" name="password" ref={register}/>
          <input type="submit"/>
        <Link to={<ModalRegister />}>
          <p>I don't have an account</p>
        </Link>
        </form>
      </Modal>
    </div>
  );
};
export default ModalLogin;
