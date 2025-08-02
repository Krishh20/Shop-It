import React from "react";
import { useLogin } from "../../context/LoginContext";
import {userLogin} from "../../api/auth.js"
import Navbar from "../../components/Navbar/Navbar.jsx";
import { useNavigate } from "react-router-dom";
function Login() {
  const { email, password,loginDispatch, token} = useLogin();
  const navigate=useNavigate()
  const onFormSubmit =async (e) => {
    e.preventDefault(); // whnver login clicked it'll start reloading page to stop preventing
    const data =await userLogin(email, password);
    if(Object.keys(data).length>0){
      localStorage.setItem('token',data.access_token)
    }
    console.log(email,password)
    loginDispatch({
      type: "TOKEN",
      payload: {
        token: data,
      },
    });
    if(data.access_token){
      navigate("/")
    }
  };
  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
    console.log( e.target.value)
  };
  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
      console.log( e.target.value)
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="!flex !justify-center !items-center !mt-32">
        <form
          onSubmit={onFormSubmit}
          className="  bg-white shadow-md w-[400px] !p-10"
        >
          <h2 className=" text-3xl !mb-4">Login</h2>
          <div className="flex flex-col gap-2 !mb-4">
            <span>Email *</span>
            <input
              className="border-b-2 border-gray-400 "
              onChange={onEmailChange}
              type="email"
              required
              placeholder="krish@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Password *</span>
            <input
              className="border-b-2 border-gray-400"
              onChange={onPasswordChange}
              type="password"
              required
              placeholder="1234"
            />
          </div>
          <div className="!mx-4">
            <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
