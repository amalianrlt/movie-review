import { Modal, Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import userRegister from '../../store/actions/auth'
import { useForm } from "react-hook-form";


const ModalRegister = () => {
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm()
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = data =>{
    console.log(data)
   dispatch(userRegister(input))
  }
  const showingModal = () => {
    setVisible(!visible);
  };

  const handleOk = () => {
    setLoading(!loading);
    setTimeout(() => {
      setVisible(visible);
      setLoading(loading);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showingModal}>
        Register
      </Button>
      <Modal
        visible={visible}
        title="Register"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
         <form onSubmit={handleSubmit(onSubmit)}>
          <p>Full Name</p>
          <input type="text" placeholder="FullName" name="name" ref={register}/>
          <p>Email</p>
          <input type="text" placeholder="Email" name="email" ref={register}/>
          <p>Password</p>
          <input type="text" placeholder="Password" name="password" ref={register}/>
          <input type="submit"/>
          <Link to={<ModalLogin />}>
            <p>I have an account</p>
          </Link>
        </form>
      </Modal>
    </div>
  );
};

export default ModalRegister;
