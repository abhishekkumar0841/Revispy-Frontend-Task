import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
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
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("All fields required");
      return;
    }

    toast.success("Registration successful")

    setFormData({
      name: "",
      email: "",
      password: "",
    });
    navigate("/login");
  };

  return (
    <div className=" w-full flex py-8 justify-center">
      <div className="border rounded-xl w-[30rem] py-4 px-8">
        <h1 className="font-bold text-2xl mb-4 text-center">
          Create your account
        </h1>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleFormDataChange}
              type="text"
              placeholder="Enter"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleFormDataChange}
              type="email"
              placeholder="Enter"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleFormDataChange}
              type="password"
              placeholder="Enter"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800">
            CREATE ACCOUNT
          </button>
        </form>

        <div className="flex py-4 justify-center gap-2">
          <p>Have an Account?</p>
          <Link to={"/login"} className="font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
