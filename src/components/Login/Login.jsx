import React, { useEffect, useState } from "react";
import { RiContactsFill, RiLockPasswordFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const loginHandler = () => {
        localStorage.setItem("login", true);
        navigate('/');
    }
    

    useEffect(() => {
        let login = localStorage.getItem("login");
        if (login) {
            navigate('/');
        }
    }, [navigate]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://192.168.90.24:8081/api/superadmin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          console.log("Login successful", data);
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        console.log("Error", error);
        setError(error);
      }
    };
  
    return (
      <section className="flex justify-center items-center bg-blue-50 py-8 px-4">
        <div className="flex flex-col lg:flex-row md:flex-row w-[95%] lg:w-[60%] md:w-[85%] items-center justify-center bg-white rounded-3xl lg:m-20 shadow-lg lg:h-[100%]">
          <div className="lg:mt-0 md:h-96 lg:h-[120%] w-full lg:w-1/2 lg:p-8 md:pb-8 flex flex-col items-center justify-center">
            <img
              src="sign up.webp"
              alt="Sign Up"
              className="h-full w-full object-cover"
            />
            <div className="flex mt-4 items-center justify-center">
              <Link to="/signup" className="underline">
                Create an account
              </Link>
            </div>
          </div>
          <div className="p-8 sm:p-16 lg:p-28 w-full lg:w-3/6">
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-8 lg:mb-14 text-left">
              Sign in
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-wrap">
              <div className="flex items-center border-b-2 border-b-gray-400 pb-2 focus-within:border-black">
                <MdEmail className="mr-2 text-xl" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-2 py-1 outline-none"
                  required
                />
              </div>
              <div className="flex items-center border-b-2 border-b-gray-400 pb-2 focus-within:border-black">
                <RiLockPasswordFill className="mr-2 text-xl" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-2 py-1 outline-none"
                  required
                />
              </div>
              <div className="flex items-center pt-4">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mr-2"
                  required
                />
                <label htmlFor="terms">Remember me</label>
              </div>
              {error && <p>${error}</p>}
              <div className="text-left w-10">
                <button
                  type="submit"
                  className="lg:h-14 mt-10 lg:w-36 md:w-28 md:h-14 w-28 inline-flex rounded-md text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 justify-center text-lg items-center" onClick={loginHandler}
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex items-center mt-4 pt-8 pr-5 ">
              <span>Or login with</span>
              <FaFacebookF className="mx-2 text-blue-600 cursor-pointer" />
              <FaTwitter className="mx-2 text-blue-400 cursor-pointer" />
              <FaGoogle className="mx-2 text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Login
