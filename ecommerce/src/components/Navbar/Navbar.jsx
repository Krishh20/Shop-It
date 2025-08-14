import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";

export default function Navbar() {
  const { token, loginDispatch } = useLogin();
  const navigate = useNavigate();
  const [isAccountDropDown, setIsAccountDropDown] = useState(false);

  const onLoginClick = () => {
    if (!token?.access_token) navigate("/auth/login");
    else loginDispatch({ type: "LOGOUT" });
  };

  return (
    <header className="flex flex-wrap justify-between items-center bg-green-900 !py-4 !px-4 sm:!px-8 text-slate-50">
      <h1
        onClick={() => navigate("/")}
        className="text-3xl sm:text-5xl font-bold cursor-pointer !mb-2 sm:!mb-0"
      >
        Shop It
      </h1>

      <nav className="flex items-center gap-4 sm:gap-8">
        <span
          onClick={() => navigate("/wishlist")}
          className="material-symbols-outlined text-2xl sm:text-3xl cursor-pointer"
        >
          favorite
        </span>

        <span
          onClick={() => navigate("/cart")}
          className="material-symbols-outlined text-2xl sm:text-3xl cursor-pointer"
        >
          shopping_cart
        </span>

        <div className="relative">
          <span
            onClick={() => setIsAccountDropDown(!isAccountDropDown)}
            className="material-symbols-outlined text-2xl sm:text-3xl cursor-pointer"
          >
            account_circle
          </span>

          {isAccountDropDown && (
            <div className="absolute right-0 !mt-2 bg-green-400 rounded shadow-md !w-24 sm:!w-32">
              <button
                onClick={onLoginClick}
                className="!w-full text-left !px-4 !py-2 hover:bg-green-500 rounded"
              >
                {token?.access_token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
