import { React, useState } from "react";
import { RiContactsFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {      
        const response = await fetch("http://192.168.90.24:8081/api/superadmin/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          alert("Sign Up successful", data);
        } else {
          console.error("Sign Up failed");
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
  
  
    return (
      <section className="flex justify-center items-center bg-blue-50 py-8 px-4 h-full ">
        <div className="flex flex-col-reverse lg:flex-row md:flex-row w-[95%] lg:w-[60%] md:w-[85%]  items-center bg-white rounded-3xl lg:m-20 shadow-lg lg:h-[80%]">
          <div className="p-8 sm:p-16 lg:p-28 w-full lg:w-2/4">
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-8 lg:mb-14 text-left">
              Sign up
            </h1>
            <div className="space-y-4">
              <div className="flex items-center border-b-2 border-b-gray-400 pb-2 focus-within:border-black">
                <RiContactsFill className="mr-2 text-xl" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-2 py-1 outline-none"
                  required
                />
              </div>
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
                  className="w-full px-2 py-1 outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {/* <div className="flex items-center border-b-2 border-b-gray-400 pb-2 focus-within:border-black">
                <RiLockPasswordLine className="mr-2 text-xl" />
                <input
                  type="password"
                  id="repeat-password"
                  name="repeat-password"
                  placeholder="Repeat your password"
                  className="w-full px-2 py-1 outline-none"
                  required
                />
              </div> */}
              {/* <div className="flex items-center pt-4">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mr-2"
                  required
                />
                <label htmlFor="terms">
                  I agree all statements in
                  <a href="#" className="underline">
                    Terms of service
                  </a>
                </label>
              </div> */}
              <div className="text-left w-10">
                <button
                  type="submit"
                  className="h-14 mt-10 w-36 inline-flex rounded-md text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 justify-center text-lg items-center"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className=" lg:mt-0 md:h-96 lg:w-1/2 w-full lg:h-full pb-8">
            <img
              src="sign up.webp"
              alt="Sign Up"
              className="w-full object-cover h-1/4 lg:h-full md:h-fullD"
            />
            <div className="flex leading-relaxed items-center justify-center">
              <Link to="/signin" className="underline">
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Signup
