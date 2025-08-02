import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";   //create new acc, protected route, add badges, folder structure editing
export default function Navbar() {  //onclicking logout user info should nbe clear from localstorage, whn user logged out cart items set=[]
  const {token, loginDispatch}=useLogin()
  const navigate = useNavigate();
  const [isAccountDropDown, setisAccountDropDown] = useState(false);
  const onLoginClick = () => {
   if(!token?.access_token){
     navigate("/auth/login")
    }
    else{
      loginDispatch({
        type:"LOGOUT",
      })

    }

  };
  return (
    <header className="flex justify-between bg-green-900 !py-4 !px-8 text-slate-50 items-center">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="text-5xl hover:cursor-pointer"
      >
        Shop It
      </h1>
      <nav className="flex ml-auto gap-8">
        <span
          onClick={() => {
            navigate("/wishlist");
          }}
          className="material-symbols-outlined text-3xl hover:cursor-pointer"
        >
          favorite
        </span>
        <span
          onClick={() => {
            navigate("/cart");
          }}
          className="material-symbols-outlined text-3xl hover:cursor-pointer"
        >
          shopping_cart
        </span>
        <div className="relative">
          <span
            onClick={() => {
              setisAccountDropDown(!isAccountDropDown);
            }}
            className="material-symbols-outlined text-3xl hover:cursor-pointer"
          >
            account_circle
          </span>
          {isAccountDropDown && (
            <div className="absolute bg-green-400">
              <button onClick={onLoginClick}>
                {token?.access_token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
