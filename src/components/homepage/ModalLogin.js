import { Modal, Button, Input} from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "antd/lib/form/Form";
import { ModalRegister } from "./ModalRegister";
import { login } from "../../store/actions/auth";

export const ModalLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  
  const dispatch = useDispatch()

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    await dispatch(login(user));
  };

  return(
    <div>
    <Button type="link" onClick={showingModal}>Login</Button>
    <Modal
      visible={visible}
      title="Login"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form onSubmit={handleSubmit}>
        <p>Email</p>
        <Input
          value={email}
          type="email"
          name="email"
          placeholder="Input your email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "21rem", 
            height: "2rem",
            borderRadius: "3px",
            padding: ".5rem",
            marginBottom: "1rem",
            marginTop: "-.5rem",
            border: "1px solid black"
          }}
        />
        <p>Password</p>
        <Input
          value={password}
          name="password"
          id="inputPassword"
          placeholder="Input your password"
          onChange={(e) => setPassword(e.target.value)}
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
        <Button Button onClick={(e) => handleSubmit(e)}>Login</Button>
        <ModalRegister/>
      </Form>
    </Modal>
  </div>
  )
}