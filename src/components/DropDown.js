import React from "react";
import ModalRegister from "./homepage/ModalRegister";
import ModalLogin from "./homepage/ModalLogin";
import { signOut } from "../store/actions/auth";
import { useDispatch } from "react-redux";

export default function DropDown() {
  const dispatch = useDispatch()
  const handleSignOut = () => {
    dispatch(signOut())
    window.location.reload()
}
  return (
    <div className="dropdown">
      <a href="/" className="dropbtn" style={{color:'white', fontSize: "20px", fontWeight:400}}>
        Account 
      </a>
      <div className="dropdown-content">
        <ModalLogin/>
        <ModalRegister/>
        <a href="/" onClick={handleSignOut}>Sign Out</a>
      </div>
    </div>
  );
}
