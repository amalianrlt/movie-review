import { Modal, Button, Input} from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "antd/lib/form/Form";
import { userRegister } from "../../store/actions/auth";

export const ModalRegister = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")
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
        name,
        email,
        password,
        username
      };
      console.log(user)
      await dispatch(userRegister(user));
  };

  return(
    <div>
    <Button type="link" onClick={showingModal}>Register</Button>
    <Modal
      visible={visible}
      title="Login"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form onSubmit={() => handleSubmit}>
      <p style={{ marginLeft: ".5rem" }}>Full Name</p>
          <Input
            value={name}
            type="name"
            name="name"
            placeholder="Input your full name"
            onChange={(e) => setName(e.target.value)}
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
          <Input
            value={username}
            type="name"
            name="username"
            id="exampleName"
            placeholder="Input your username"
            onChange={(e) => setUsername(e.target.value)}
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
          <Input
            value={email}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Input your email"
            onChange={(e) => setEmail(e.target.value)}
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
          <Input
            value={password}
            name="password"
            id="myInput"
            placeholder="Input your password"
            onChange={(e) => setPassword(e.target.value)}
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
          <Button onClick={(e) => handleSubmit(e)}>Register</Button>
      </Form>
    </Modal>
  </div>
  )
}
