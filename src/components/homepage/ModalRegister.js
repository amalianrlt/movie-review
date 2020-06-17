import { Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../../store/actions/auth";
import { useForm } from "react-hook-form";

const ModalRegister = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  // const [move, setMove] = useState(ModalLogin);

  const [input] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const closeModal = () => {
    setVisible(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(userRegister(data));
    props.toggleModal();
  };
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
      <a onClick={showingModal}>Register</a>
      <Modal
        visible={visible}
        title="Register"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <p style={{ marginLeft: ".5rem" }}>Full Name</p>
          <input
            type="text"
            placeholder="Input your Full Name"
            name="name"
            ref={register}
            style={{
              width: "21rem",
              height: "2rem",
              borderRadius: ".2rem",
              padding: ".5rem",
              marginBottom: "1rem",
              marginTop: "-.5rem",
              border: "1px solid black",
            }}
          />
          <p style={{ marginLeft: ".5rem" }}>Username</p>
          <input
            type="text"
            placeholder="Set your Username"
            name="username"
            ref={register}
            style={{
              width: "21rem",
              height: "2rem",
              borderRadius: ".2rem",
              padding: ".5rem",
              marginBottom: "1rem",
              marginTop: "-.5rem",
              border: "1px solid black",
            }}
          />
          <p style={{ marginLeft: ".5rem" }}>Email</p>
          <input
            type="text"
            placeholder="Enter your active email"
            name="email"
            ref={register}
            style={{
              width: "21rem",
              height: "2rem",
              borderRadius: ".2rem",
              padding: ".5rem",
              marginBottom: "1rem",
              marginTop: "-.5rem",
              border: "1px solid black",
            }}
          />
          <p style={{ marginLeft: ".5rem" }}>Password</p>
          <input
            type="text"
            placeholder="Create your password"
            name="password"
            ref={register}
            style={{
              width: "21rem",
              height: "2rem",
              borderRadius: ".2rem",
              padding: ".5rem",
              marginBottom: "1rem",
              marginTop: "-.5rem",
              border: "1px solid black",
            }}
          />
          <input
            type="submit"
            onClick={closeModal}
            style={{
              borderRadius: ".3rem ",
              fontSize: "1rem",
              padding: '0.2rem 1rem',
              marginBottom: "1rem",
              marginTop: ".5rem",
              textAlign: "center",
              border: "1px solid #1C91FF",
              color: "white",
              backgroundColor:"#1C91FF"
            }}
          />
          
            <a style={{ color: "black" }}> I have an account</a>
         
        </form>
      </Modal>
    </div>
  );
};

export default ModalRegister;
