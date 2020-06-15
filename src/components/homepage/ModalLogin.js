import React, {useState }  from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Input } from 'antd';
//import { login } from "../../store/actions/auth";
import 'antd/dist/antd.css';

const ModalLogin = (props) => {
  state = { visible: false };
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = e => {
    e.preventDefault()
    console.log(e);
    const userData = {
      email,
      password
    // this.setState({
    //   visible: false,
    // });
    }
    dispatch(login(userData))
    props.history.push("/")
  };

  
 
  showModal = () => {
    this.setState({
      visible: true,
    });
  };


  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };



  // render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          SignIn
        </Button>
        <Modal
          title="MilanTV"
          visible={this.state.visible}
          onOk={this.handleLogin}
          onCancel={this.handleCancel}
        >
               {/* <input
                    type="email"
                    value={email}
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="name"
                    value={password}
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                /> */}
               
          <p>Email</p>
          <Input placeholder="Email"/>
          <p>Password</p>
          <Input placeholder="Password"/>
        </Modal>
      </div>
    );
  }
// }


// function ModalPage() {
//     const [modalIsOpen, setModalIsOpen] = useState(false);

//     const showModal =()=>{
//       console.log("tes")
//       setModalIsOpen(true)
//     }

//     const handleOk = e =>{
//       console.log(e, "tes")
//       setModalIsOpen(false)
//     }

//     const handleCancel = e =>{
//       console.log(e)
//       setModalIsOpen(false)
//     }

//     return (
//         <div>
//         <Button type="primary" 
//         onClick={showModal}>
//           Sign Up
//         </Button>
//         <Modal
//           isOpen={modalIsOpen}
//           onOk={handleOk}
//           onCancel={handleCancel}
//         >
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//         </Modal>
//       </div>
//     )
// }

export default ModalLogin
