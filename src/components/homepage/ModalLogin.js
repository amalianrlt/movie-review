import { Modal} from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/auth";
import ModalRegister from "./ModalRegister";
import { useForm } from "react-hook-form";

const ModalLogin = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [input] = useState({
    email: "",
    password: "",
  });

  const showingModal = () => {
    setVisible(!visible);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(login(data));
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
      <a href="/" onClick={showingModal}>Login</a>
      <Modal
        visible={visible}
        title="Login"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <p style={{ marginLeft: ".5rem" }}>Email</p>
          <input
            type="text"
            placeholder="Insert your registered email"
            name="email"
            ref={register}
            style={{
              width: "21rem", 
              height: "2rem",
              borderRadius: ".3rem",
              padding: ".5rem",
              marginBottom: "1rem",
              marginTop: "-.5rem",
              border: "1px solid black"
            }}
          />
          <p style={{ marginLeft: ".5rem" }}>Password</p>
          <input
            type="password"
            placeholder="Input your correct password"
            name="password"
            ref={register}
            style={{
              width: "21rem",
              height: "2rem",
              borderRadius: ".3rem",
              padding: ".5rem",
              marginBottom: "1rem",
              marginTop: "-.5rem",
              border: "1px solid black"
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
          <p>
            {" "}
            <a
              id={ModalRegister}
              href="/#"
              onClick={ModalRegister}
              style={{ color: "black" }}
            >
              I don't have an account
            </a>{" "}
          </p>
        </form>
      </Modal>
    </div>
  );
};
export default ModalLogin;
