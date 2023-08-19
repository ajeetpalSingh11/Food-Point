import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // useEffect(() => {
  //   console.log("useEffect called from Header");
  // }, [btnNameReact]);

  const { loggedUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-green-200">
      <div className="logo-container">
        <Link to="/">
          <img className="h-28" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {useOnlineStatus() ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          {/* <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li> */}
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          {/* <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact} : {loggedUser}
          </button> */}
          {/* <li className="px-4 font-bold">{loggedUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
