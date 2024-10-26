import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.auth.user);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <header className="py-2 px-6">
        {user && (
          <div className="flex gap-6 justify-end">
            <p className="text-gray-600">Help</p>
            <p className="text-gray-600">Orders & Returns</p>
            <p className="text-gray-600">
              Hi,{" "}
              <span
              onClick={()=>dispatch(logout())}
                onMouseEnter={() => setShowLogout(true)}
                onMouseLeave={() => setShowLogout(false)}
                className="font-semibold cursor-pointer"
              >
                {user}
              </span>
            </p>
            {showLogout && (
              <div className="absolute top-8 right-10 bg-white border border-gray-200 shadow-lg rounded-md py-2 px-4 text-gray-700 text-sm">
                <p className="font-semibold">Logout</p>
              </div>
            )}
          </div>
        )}
        <div className="flex items-center justify-between py-1">
          <h1 className="text-[32px] font-bold flex-1">
            <Link to={"/"}>ECOMMERCE</Link>
          </h1>
          <nav className="space-x-4 font-bold flex-1 text-center">
            <Link to={"#"}>Categories</Link>
            <Link to={"#"}>Sale</Link>
            <Link to={"#"}>Clearance</Link>
            <Link to={"#"}> New Stock</Link>
            <Link to={"#"}>Trending</Link>
          </nav>

          <div className="flex gap-4 flex-1 justify-end">
            <CiSearch className=" text-[20px]" />
            <FiShoppingCart className=" text-[20px]" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
