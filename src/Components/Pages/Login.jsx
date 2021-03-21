import React from "react";
import "../../Styles/Pages/Login.css";
import LoginForm from "../Elements/LoginForm.jsx";
import Background from "../../assets/images/Computer-login.png";

function Login() {
  return (
    <div
      className="loginPicture d-flex container-fluid"
      style={{ backgroundImage: "url(" + Background + ")" }}
    >
      <LoginForm />
    </div>
  );
}

export default Login;
