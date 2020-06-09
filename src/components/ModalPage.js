import React, { useState } from 'react'
import { Modal, Button, Input } from 'antd';
import 'antd/dist/antd.css';

class ModalPage extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleSignUp = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Sign Up
        </Button>
        <Modal
          title="MilanTV"
          visible={this.state.visible}
          onOk={this.handleSignUp}
          onCancel={this.handleCancel}
        >
          <p>Full Name</p>
          <Input placeholder="FUll Name"/>
          <p>Email</p>
          <Input placeholder="Email"/>
          <p>Password</p>
          <Input placeholder="Password"/>
        </Modal>
      </div>
    );
  }
}

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

export default ModalPage
