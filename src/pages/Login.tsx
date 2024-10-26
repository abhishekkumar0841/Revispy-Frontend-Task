import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loggedInToken, setUser } from "../redux/slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormDataChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("All fields required");
      return;
    }

    let dummyToken = formData.email.split("").join("#");
    dispatch(setUser(formData.email));
    dispatch(loggedInToken(dummyToken));

    setFormData({
      email: "",
      password: "",
    });

    toast.success(`Welcome back ${formData.email}`);
    navigate('/')
  };

  return (
    <div className=" w-full flex py-8 justify-center">
      <div className="border rounded-xl w-[30rem] py-4 px-8">
        <h1 className="font-bold text-2xl mb-4 text-center">Login</h1>
        <h1 className="font-bold text-xl mb-4 text-center">
          Welcome back to ECOMMERCE
        </h1>
        <h1 className=" font-semibold text-lg mb-4 text-center">
          The next gen business marketplace
        </h1>
        <form className="space-y-4 " onSubmit={handleFormSubmit}>
          <div>
            <label id="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="text"
              value={formData.email}
              onChange={handleFormDataChange}
              placeholder="Enter"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label
              id="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleFormDataChange}
              placeholder="Enter"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800">
            LOGIN
          </button>
        </form>

        <div className="flex py-4 justify-center gap-2">
          <p>Don't have an Account?</p>
          <Link to={"/register"} className="font-bold">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}
